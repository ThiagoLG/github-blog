import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileInfoItem,
  ProfileInfosContainer,
} from './styles'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar
        src="https://github.com/ThiagoLG.png"
        alt="Profile Picture"
      />

      <ProfileContent>
        <div className="UserTitle">
          <span>Thiago Lourençon Ghebra</span>
          <a href="https://github.com/ThiagoLG">
            <span>GITHUB </span>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>

        <div className="UserBio">
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
        </div>

        <ProfileInfosContainer>
          <ProfileInfoItem>
            <FontAwesomeIcon icon={faGithub} />
            thiagolg
          </ProfileInfoItem>
          <ProfileInfoItem>
            <FontAwesomeIcon icon={faBuilding} /> Class Solutions
          </ProfileInfoItem>

          <ProfileInfoItem>
            <FontAwesomeIcon icon={faUserGroup} /> 4 followers
          </ProfileInfoItem>
        </ProfileInfosContainer>
      </ProfileContent>
    </ProfileContainer>
  )
}
