import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { PostsContext } from '../../contexts/PostsContext'
import { SearchFormContainer } from './styles'
import * as z from 'zod'

export function SearchForm() {
  const { loadingState, posts, getRepositoryInfos } = useContext(PostsContext)

  const SearchFormSchema = z.object({
    searchTerm: z.string(),
  })

  type SearchFormInputs = z.infer<typeof SearchFormSchema>

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function submitSearch(data: SearchFormInputs) {
    getRepositoryInfos(data.searchTerm)
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(submitSearch)}>
      <label htmlFor="search">Publications</label>
      {loadingState === 'laoding' ? (
        <span>Loading...</span>
      ) : (
        <span>
          {posts.length} publication{posts.length !== 1 ? 's' : ''}
        </span>
      )}

      <input
        type="text"
        id="search"
        placeholder="search content"
        {...register('searchTerm')}
      />
    </SearchFormContainer>
  )
}
