import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 54rem;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;

  border-radius: 0.625rem;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 3.5rem;
`

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
`

export const ProfileContent = styled.div`
  display: grid;
  grid-template: 1fr repeat(3, 1fr);
  gap: 0.5rem;

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
  }

  .UserBio {
    span {
      font-size: 1rem;
      line-height: 160%;
      color: ${({ theme }) => theme['base-text']};
    }
  }
`

export const ProfileInfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;
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
