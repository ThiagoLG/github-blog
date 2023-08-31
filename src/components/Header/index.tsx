import { HeaderContainer, HeaderFlashes, HeaderLogo } from './styles'
import LogoImg from '../../assets/HeaderLogo.svg'
import EffectLeftImg from '../../assets/HeaderEffectLeft.svg'
import EffectRightImg from '../../assets/HeaderEffectRight.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={LogoImg} alt="Header logo" />
        <span>GITHUB BLOG</span>
      </HeaderLogo>
      <HeaderFlashes>
        <div></div>
        <div></div>
        <div></div>
        <img src={EffectLeftImg} alt="Left header effect" />
        <img src={EffectRightImg} alt="Right header effect" />
      </HeaderFlashes>
    </HeaderContainer>
  )
}
