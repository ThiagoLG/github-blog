import { styled } from 'styled-components'

export const MainContainer = styled.main`
  margin: auto;
  max-width: 54rem;
  width: 100%;

  transform: translateY(-5rem);

  @media (max-width: 900px) {
    width: 100%;
    padding: 1rem;
  }
`
