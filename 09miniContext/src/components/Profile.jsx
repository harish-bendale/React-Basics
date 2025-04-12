import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = React.useContext(UserContext);

    if(!user) return <div>please Login</div>
    return <div>Welcome {user.userName}</div>
}
export default Profile;