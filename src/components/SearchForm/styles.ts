import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: grid;
  grid-template-rows: 2fr 3fr;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-areas:
    'label span'
    'input input'; */
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;

  label {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  span {
    color: ${({ theme }) => theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
    /* grid-area: span; */
    text-align: right;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  input {
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme['base-title']};
    /* font-size: 1 rem; */
    /* height: 3.125 rem; */

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
