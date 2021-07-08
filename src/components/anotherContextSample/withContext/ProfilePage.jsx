import { UserProfileContext } from './UserContext';

import HomePage from "./HomePage"

const ProfilePage = () => {
    return (
      <UserProfileContext.Provider>
        <HomePage />
      </UserProfileContext.Provider>
    )
}

export default ProfilePage
