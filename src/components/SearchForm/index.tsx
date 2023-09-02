import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <label htmlFor="search">Publications</label>
      <span>6 publications</span>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search content"
      />
    </SearchFormContainer>
  )
}
