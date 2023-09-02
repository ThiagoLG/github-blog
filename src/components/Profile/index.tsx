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
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface IProfileInfos {
  avatar_url: string
  followers: number
  html_url: string
  name: string
  login: string
  company: string
  bio: string
}

export function Profile() {
  const [userProfile, setUserProfile] = useState<IProfileInfos>()

  async function getProfileInfos() {
    const urlParams = new URLSearchParams(location.search)
    const githubUser = urlParams.get('github_user') || 'ThiagoLG'
    const response = await api.get(`/users/${githubUser}`)

    setUserProfile(response.data)
  }

  useEffect(() => {
    getProfileInfos()
  }, [])

  return (
    <ProfileContainer>
      <ProfileAvatar src={userProfile?.avatar_url} alt="Profile Picture" />

      <ProfileContent>
        <div className="UserTitle">
          <span>{userProfile?.name}</span>
          <a href={userProfile?.html_url}>
            <span>GITHUB </span>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>

        <div className="UserBio">
          <span>{userProfile?.bio}</span>
        </div>

        <ProfileInfosContainer>
          <ProfileInfoItem>
            <FontAwesomeIcon icon={faGithub} />
            {userProfile?.login}
          </ProfileInfoItem>
          {userProfile?.company && (
            <ProfileInfoItem>
              <FontAwesomeIcon icon={faBuilding} /> {userProfile.company}
            </ProfileInfoItem>
          )}
          <ProfileInfoItem>
            <FontAwesomeIcon icon={faUserGroup} /> {userProfile?.followers || 0}{' '}
            follower{(userProfile?.followers || 0) > 1 ? 's' : ''}
          </ProfileInfoItem>
        </ProfileInfosContainer>
      </ProfileContent>
    </ProfileContainer>
  )
}
