import { useContext, useEffect, useState } from 'react'
import { IssueHeader } from '../../components/IssueHeader'
import { IssuesPageContainer } from './styles'
import { api } from '../../lib/axios'
import { IGithubIssueProps, PostsContext } from '../../contexts/PostsContext'
import { formatDistanceToNow } from 'date-fns'
import { IssueContent } from '../../components/IssueContent'
import { useParams } from 'react-router-dom'
import { pageTransition } from '../../styles/global'

export function IssuesPage() {
  const [issueInfos, setIssueInfos] = useState<IGithubIssueProps>()
  const { id } = useParams()
  const { getGitRepoFromUrl } = useContext(PostsContext)

  async function getIssueInfos() {
    const gitRepo = await getGitRepoFromUrl()

    const response = await api.get(`/repos/${gitRepo}/issues/${id}`)
    const issueData: IGithubIssueProps = response.data
    console.log(issueData)

    issueData.created_at = formatDistanceToNow(new Date(issueData.created_at), {
      addSuffix: true,
    })

    setIssueInfos(response.data)
  }

  useEffect(() => {
    getIssueInfos()
  }, [])

  return (
    <IssuesPageContainer {...pageTransition}>
      <IssueHeader issueObj={issueInfos} />
      <IssueContent content={issueInfos?.body} />
    </IssuesPageContainer>
  )
}
