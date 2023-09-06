import styled from 'styled-components'

export const PostContainer = styled.article`
  height: 16.25rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  padding: 2rem;
  background: ${({ theme }) => theme['base-post']};
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 3.75rem auto;
  gap: 1.25rem;

  h1 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
    grid-column: 1/2;
  }

  span {
    color: ${({ theme }) => theme['base-span']};
    margin-top: 0.31rem;
    font-size: 0.875rem;
    line-height: 160%;
    grid-column: 2 / 3;
    text-align: right;
  }

  p {
    color: ${({ theme }) => theme['base-text']};
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;

    grid-column: 1/3;

    font-size: 1rem;
    line-height: 150%;
  }
`
export const IssuesFeedbackContainer = styled.div`
  width: 100%;
  grid-column: 1 / 3;
  text-align: center;
  font-size: 1.25rem;

  h1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme }) => theme['base-text']};
    opacity: 0.75;
  }
`
