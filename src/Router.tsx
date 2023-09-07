import { Route, Routes, useLocation } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { IssuesPage } from './pages/Issue'
import { AnimatePresence } from 'framer-motion'

export function Router() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Blog />} />
        <Route path="/issue/:id" element={<IssuesPage />} />
      </Routes>
    </AnimatePresence>
  )
}
