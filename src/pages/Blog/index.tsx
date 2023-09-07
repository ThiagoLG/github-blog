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
import { pageTransition } from '../../styles/global'

export function Blog() {
  const { posts, getRepositoryInfos, loadingState } = useContext(PostsContext)
  const animationVariants = {
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1,
        type: 'spring',
        duration: 0.7,
      },
    }),
    hidden: {
      opacity: 0,
      scale: 0,
    },
  }
  useEffect(() => {
    getRepositoryInfos()
  }, [])

  return (
    <BlogContainer {...pageTransition}>
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
          posts.map((post, index) => {
            return (
              <Post
                key={post.id}
                body={post.body}
                title={post.title}
                createdDate={post.created_at}
                url={post.url}
                number={post.number}
                animationProps={{
                  custom: index,
                  initial: 'hidden',
                  animate: 'visible',
                  variants: animationVariants,
                  whileHover: {
                    scale: 1.04,
                  },
                }}
              />
            )
          })}
      </PostsContainer>
    </BlogContainer>
  )
}
