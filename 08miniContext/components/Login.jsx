import React from 'react'
import {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, password});
    }
    return (
        <div>
            <h1>Login page</h1>
            <input 
                type='text'
                placeholder='UserName'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className='text-black bg-blue'
            />

            <input 
                type='text'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login;