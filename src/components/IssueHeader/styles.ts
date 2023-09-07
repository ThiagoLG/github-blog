import styled from 'styled-components'

export const IssueHeaderContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 0.625rem;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`

export const IssueHeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.blue};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }
`

export const IssueHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
  }

  @media (max-width: 500px) {
    gap: 1.5rem;
  }
`

export const IssueHeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme['base-span']};
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`
