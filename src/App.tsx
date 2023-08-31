import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { Blog } from './pages/Blog'
import { Header } from './components/Header'
import { MainContainer } from './styles'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
        <MainContainer>
          <Blog />
        </MainContainer>
      </ThemeProvider>
    </>
  )
}
