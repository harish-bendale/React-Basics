import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
    return (
        <div className='flex justify-center px-4 py-1'>
            You are in the page having id : {userid}
        </div>
    )
}

export default User;