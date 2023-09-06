import { useContext, useEffect } from 'react'
import { Post } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { BlogContainer, PostsContainer } from './styles'
import { IssuesFeedbackContainer } from '../../components/Posts/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleExclamation,
  faFaceSadTear,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { PostsContext } from '../../contexts/PostsContext'

export function Blog() {
  const { posts, getRepositoryInfos, loadingState } = useContext(PostsContext)

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
