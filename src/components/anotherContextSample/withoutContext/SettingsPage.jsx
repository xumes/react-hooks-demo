

const SettingsPage = ( { person } ) => {
    //Finally, SettingsPage receives the props and use it
    return (
        <div>
            {person.firstName}
            {person.lastName}
        </div>
    )
}

export default SettingsPage
