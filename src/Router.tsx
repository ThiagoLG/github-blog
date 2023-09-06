import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { IssuesPage } from './pages/Issue'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/issue" element={<IssuesPage />} />
    </Routes>
  )
}
