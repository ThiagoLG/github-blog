import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background: ${({ theme }) => theme['base-profile']};
`

export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 2.75rem;
    height: 2.5rem;
  }

  span {
    font-family: 'Coda', sans-serif;
    color: ${({ theme }) => theme.blue};
    font-size: 1.5rem;
    line-height: 1.6;
  }
`

export const HeaderFlashes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  div {
    position: absolute;
    opacity: 0.15;
    background: ${({ theme }) => theme.white};

    &:nth-child(1) {
      filter: blur(12.5rem);
      width: 14.75rem;
      height: 14.75rem;
      left: 0;
      top: 0;
    }

    &:nth-child(2) {
      filter: blur(11rem);
      width: 10rem;
      height: 10rem;
      right: 0;
      top: 0;
    }

    &:nth-child(3) {
      filter: blur(7.5rem);
      width: 55rem;
      height: 3.25rem;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:nth-of-type(1) {
      left: 0;
    }

    &:nth-of-type(2) {
      right: 0;
    }
  }
`
