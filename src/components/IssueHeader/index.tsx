import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'
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
  const { search } = useLocation()

  return (
    <IssueHeaderContainer>
      <IssueHeaderLinks>
        <Link to={`/${search}`}>
          <FontAwesomeIcon icon={faChevronLeft} /> <span>Voltar</span>
        </Link>
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
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{issueObj?.created_at}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {issueObj?.comments} comentário
              {issueObj?.comments !== 1 && 's'}
            </span>
          </div>
        </IssueHeaderInfo>
      </IssueHeaderContent>
    </IssueHeaderContainer>
  )
}
