import { styled } from 'styled-components'

export const ProfileContainer = styled.section`
  width: 54rem;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  display: grid;

  border-radius: 0.625rem;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
  }
`

export const ProfileInfosContainer = styled.div``

export const ProfileInfoItem = styled.div`
  color: white;
`
