import { useContext } from "react";
import { UserProfileContext } from './UserContext';

const SettingsPage = ( ) => {
    const person = useContext( UserProfileContext );

    return (
        <div>
            { person.firstName }
            { person.lastName }
        </div>
    )
}

export default SettingsPage
