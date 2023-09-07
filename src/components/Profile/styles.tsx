import styled from 'styled-components'

export const ProfileContainer = styled.section`
  /* width: 54rem; */
  height: auto;
  padding: 2rem 2.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;

  border-radius: 0.625rem;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 3.5rem;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    gap: 2rem 0;
  }
`

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
  @media (max-width: 670px) {
    grid-column: 1/3;
    width: 11.25rem;
    height: 11.25rem;
    margin: auto;
  }
`

export const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem;
  width: 100%;

  .UserTitle {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
      color: ${({ theme }) => theme['base-title']};
    }

    a {
      color: ${({ theme }) => theme.blue};
      text-decoration: none;
      font-weight: 700;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        font-size: 0.75rem;
        height: 0.75rem;
        color: ${({ theme }) => theme.blue};
      }

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }
    }

    @media (max-width: 450px) {
      flex-direction: column-reverse;
      gap: 0.5rem;
      align-items: center;
    }
  }

  .UserBio {
    span {
      font-size: 1rem;
      line-height: 160%;
      color: ${({ theme }) => theme['base-text']};
    }
    @media (max-width: 450px) {
      text-align: center;
    }
  }
  @media (max-width: 670px) {
    gap: 1.5rem;
  }
`

export const ProfileInfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;

  @media (max-width: 530px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const ProfileInfoItem = styled.div`
  color: ${({ theme }) => theme['base-subtitle']};
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme['base-label']};
  }
`
