import { IssueContentContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface IssueContentProps {
  content?: string
}
export function IssueContent({ content }: IssueContentProps) {
  return (
    <IssueContentContainer>
      {content ? (
        <ReactMarkdown>{content}</ReactMarkdown>
      ) : (
        <span>Issue without content</span>
      )}
    </IssueContentContainer>
  )
}
