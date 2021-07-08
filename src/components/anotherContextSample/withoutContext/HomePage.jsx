import SettingsPage from "./SettingsPage"

const HomePage = ( { person } ) => {
    // HomePage received person just to pass it down to SettingsPage

    return (
        <SettingsPage person={ person }/>
    )
}

export default HomePage
