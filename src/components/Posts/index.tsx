import { HTMLMotionProps } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { PostContainer } from './styles'

interface IPostProps {
  title: string
  createdDate: string
  url: string
  body: string
  number: number
  animationProps?: HTMLMotionProps<'article'>
}

export function Post({
  body,
  createdDate,
  title,
  number,
  animationProps = {},
}: IPostProps) {
  const { search } = useLocation()
  return (
    <Link to={`/issue/${number}${search}`} style={{ textDecoration: 'none' }}>
      <PostContainer {...animationProps}>
        <h1>{title}</h1>
        <span>{createdDate}</span>
        <p>{body}</p>
      </PostContainer>
    </Link>
  )
}
