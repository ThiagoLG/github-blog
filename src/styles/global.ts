import { HTMLMotionProps } from 'framer-motion'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
 }

 #root {
  background: ${({ theme }) => theme['base-background']};
  min-height: 100vh;
 }
`
export const pageTransition: HTMLMotionProps<'div'> = {
  initial: { x: -1000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}
