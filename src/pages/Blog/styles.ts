import styled from 'styled-components'

export const BlogContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr;
  justify-content: space-between;
  gap: 0.75rem;

  label {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
  }

  span {
    color: ${({ theme }) => theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme.white};

    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme['base-border']};
    background: ${({ theme }) => theme['base-input']};

    &:focus-visible {
      outline: 0;
      box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.blue};
      transition: 250ms;
    }
  }
`
