import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { Blog } from './pages/Blog'
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
        <Blog />
      </ThemeProvider>
    </>
  )
}
