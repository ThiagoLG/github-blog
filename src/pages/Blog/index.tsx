import { useEffect, useState } from 'react'
import { Post } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { api } from '../../lib/axios'
import { BlogContainer, PostsContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { IssuesFeedbackContainer } from '../../components/Posts/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleExclamation,
  faFaceSadTear,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

interface IPostInfos {
  id: number
  body: string
  title: string
  created_at: string
  url: string
}
type loadingState = 'error' | 'laoding' | 'success'

export function Blog() {
  const [posts, setPosts] = useState<IPostInfos[]>([])
  const [loadingState, setLoadingState] = useState<loadingState>('laoding')

  async function getRepositoryInfos() {
    try {
      const response = await api.get(`/search/issues`, {
        params: {
          q: `repo:${getGitRepoFromUrl()}`,
        },
      })

      const issues: IPostInfos[] = response.data.items || []
      const postsData = issues.map((issue) => {
        const friendlyDate = formatDistanceToNow(new Date(issue.created_at), {
          addSuffix: true,
        })
        return {
          id: issue.id,
          body: issue.body,
          title: issue.title,
          created_at: friendlyDate,
          url: issue.url,
        }
      })
      setPosts(postsData)
      setLoadingState('success')
    } catch (e) {
      setLoadingState('error')
    }
  }

  function getGitRepoFromUrl() {
    const validateRepoNameRegex = /^.+\/.+$/
    const urlParams = new URLSearchParams(location.search)
    const gitRepo = urlParams.get('repository') || ''
    if (validateRepoNameRegex.test(gitRepo)) return gitRepo
    return 'ThiagoLG/github-blog'
  }

  useEffect(() => {
    getRepositoryInfos()
  }, [])

  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
      <PostsContainer>
        {loadingState === 'laoding' && (
          <IssuesFeedbackContainer>
            <h1>
              <p>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  bounce
                  style={{ marginRight: '1rem' }}
                />{' '}
                Looking for repository issues...
              </p>
            </h1>
          </IssuesFeedbackContainer>
        )}
        {loadingState === 'error' && (
          <IssuesFeedbackContainer>
            <h1>
              <p>
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  style={{ marginRight: '1rem' }}
                />{' '}
                An error occurred in the repository request, please try again...
              </p>
            </h1>
          </IssuesFeedbackContainer>
        )}
        {loadingState === 'success' && !posts.length && (
          <IssuesFeedbackContainer>
            <h1>
              <p>
                <FontAwesomeIcon
                  icon={faFaceSadTear}
                  style={{ marginRight: '1rem' }}
                />
                No issues found in this repository
              </p>
            </h1>
          </IssuesFeedbackContainer>
        )}
        {loadingState === 'success' &&
          posts.length &&
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                body={post.body}
                title={post.title}
                createdDate={post.created_at}
                url={post.url}
              />
            )
          })}
      </PostsContainer>
    </BlogContainer>
  )
}
