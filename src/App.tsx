import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { Header } from './components/Header'
import { MainContainer } from './styles'
import { PostsProvider } from './contexts/PostsContext'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <PostsProvider>
          <Header />
          <MainContainer>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </MainContainer>
        </PostsProvider>
      </ThemeProvider>
    </>
  )
}
