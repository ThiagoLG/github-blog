import { PostContainer } from './styles'

interface IPostProps {
  title: string
  createdDate: string
  url: string
  body: string
}

export function Post({ body, createdDate, title }: IPostProps) {
  return (
    <PostContainer>
      <h1>{title}</h1>
      <span>{createdDate}</span>
      <p>{body}</p>
    </PostContainer>
  )
}
