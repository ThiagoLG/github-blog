import styled from 'styled-components'
import { motion } from 'framer-motion'

export const BlogContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
