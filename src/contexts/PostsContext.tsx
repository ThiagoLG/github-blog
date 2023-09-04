import { formatDistanceToNow } from 'date-fns'
import { createContext, ReactNode, useState } from 'react'
import { api } from '../lib/axios'

interface IPostsProviderProps {
  children: ReactNode
}

export interface IPostInfos {
  id: number
  body: string
  title: string
  created_at: string
  url: string
}

type LoadingState = 'error' | 'laoding' | 'success'

interface IPostsContextType {
  posts: IPostInfos[]
  loadingState: LoadingState
  getRepositoryInfos: () => Promise<void>
}

export const PostsContext = createContext({} as IPostsContextType)
export function PostsProvider({ children }: IPostsProviderProps) {
  const [posts, setPosts] = useState<IPostInfos[]>([])
  const [loadingState, setLoadingState] = useState<LoadingState>('laoding')

  async function getRepositoryInfos() {
    try {
      const response = await api.get(`/search/issues`, {
        params: {
          q: `repo:${getGitRepoFromUrl()}`,
        },
      })

      const issues: IPostInfos[] = response.data.items || []
      const postsData = issues.map((issue) => {
        const friendlyDate = formatDistanceToNow(new Date(issue.created_at), {
          addSuffix: true,
        })
        return {
          id: issue.id,
          body: issue.body,
          title: issue.title,
          created_at: friendlyDate,
          url: issue.url,
        }
      })
      setPosts(postsData)
      setLoadingState('success')
    } catch (e) {
      setLoadingState('error')
    }
  }

  function getGitRepoFromUrl() {
    const validateRepoNameRegex = /^.+\/.+$/
    const urlParams = new URLSearchParams(location.search)
    const gitRepo = urlParams.get('repository') || ''
    if (validateRepoNameRegex.test(gitRepo)) return gitRepo
    return 'ThiagoLG/github-blog'
  }

  return (
    <PostsContext.Provider value={{ posts, loadingState, getRepositoryInfos }}>
      {children}
    </PostsContext.Provider>
  )
}
