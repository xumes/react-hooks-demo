import HomePage from "./HomePage"

const user = {
  firstName: 'Jane',
  lastName: 'Doe'
}

const ProfilePage = () => {
    // ProfilePage sends the user object as a prop to HomePage component
    return (
        <HomePage person={user} />
    )
}

export default ProfilePage
