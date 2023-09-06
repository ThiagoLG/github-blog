import { useEffect, useState } from 'react'
import { IssueHeader } from '../../components/IssueHeader'
import { IssuesPageContainer } from './styles'
import { api } from '../../lib/axios'
import { IGithubIssueProps } from '../../contexts/PostsContext'
import { formatDistanceToNow } from 'date-fns'
import { IssueContent } from '../../components/IssueContent'

export function IssuesPage() {
  const [issueInfos, setIssueInfos] = useState<IGithubIssueProps>()

  async function getIssueInfos() {
    const response = await api.get(
      '/repos/rocketseat-education/reactjs-github-blog-challenge/issues/6',
    )
    const issueData: IGithubIssueProps = response.data

    issueData.created_at = formatDistanceToNow(new Date(issueData.created_at), {
      addSuffix: true,
    })

    console.log(issueData)

    setIssueInfos(response.data)
  }

  useEffect(() => {
    getIssueInfos()
  }, [])

  return (
    <IssuesPageContainer>
      <IssueHeader issueObj={issueInfos} />
      <IssueContent content={issueInfos?.body} />
    </IssuesPageContainer>
  )
}
