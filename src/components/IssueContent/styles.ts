import styled from 'styled-components'

export const IssueContentContainer = styled.section`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  color: ${({ theme }) => theme['base-text']};

  img {
    max-width: 100%;
    border-radius: 4px;
    box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.03);
  }

  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
  }
`
