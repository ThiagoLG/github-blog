import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ProfileContainer,
  ProfileInfoItem,
  ProfileInfosContainer,
} from './styles'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/ThiagoLG.png" alt="Profile Picture" />

      <div className="UserTitle">
        <span>Cameron Williasom</span>
        <a href="https://github.com/ThiagoLG">
          GITHUB <FontAwesomeIcon icon="arrow-up-right-from-square" />
        </a>
      </div>

      <div className="UserBio">
        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>
      </div>

      <ProfileInfosContainer>
        <ProfileInfoItem>cameronwill</ProfileInfoItem>

        <ProfileInfoItem>
          <FontAwesomeIcon icon={faBuilding} /> Rocketseat
        </ProfileInfoItem>

        <ProfileInfoItem>
          <FontAwesomeIcon icon="user-group" /> 32 followers
        </ProfileInfoItem>
      </ProfileInfosContainer>
    </ProfileContainer>
  )
}
