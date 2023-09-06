import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IGithubIssueProps } from '../../contexts/PostsContext'
import {
  IssueHeaderContainer,
  IssueHeaderContent,
  IssueHeaderInfo,
  IssueHeaderLinks,
} from './styles'

interface IssueItemProps {
  issueObj?: IGithubIssueProps
}

export function IssueHeader({ issueObj }: IssueItemProps) {
  return (
    <IssueHeaderContainer>
      <IssueHeaderLinks>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} /> <span>Voltar</span>
        </a>
        <a href={issueObj?.html_url}>
          <span>Ver no github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </IssueHeaderLinks>
      <IssueHeaderContent>
        <h1>{issueObj?.title}</h1>
        <IssueHeaderInfo>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issueObj?.user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issueObj?.created_at}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentátarios</span>
          </div>
        </IssueHeaderInfo>
      </IssueHeaderContent>
    </IssueHeaderContainer>
  )
}
