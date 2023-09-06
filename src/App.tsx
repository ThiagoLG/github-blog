import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { Blog } from './pages/Blog'
import { Header } from './components/Header'
import { MainContainer } from './styles'
import { PostsProvider } from './contexts/PostsContext'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <PostsProvider>
          <Header />
          <MainContainer>
            <Blog />
          </MainContainer>
        </PostsProvider>
      </ThemeProvider>
    </>
  )
}
