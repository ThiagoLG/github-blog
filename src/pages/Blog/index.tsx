import { Post } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { BlogContainer, PostsContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
      <PostsContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </BlogContainer>
  )
}
