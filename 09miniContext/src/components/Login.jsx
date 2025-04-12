import React from 'react';
import UserContext from '../context/UserContext';


function Login() {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {setUser} = React.useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, password});
    }
    return (
        <div>
            <h1>Login Form</h1>
            <input 
                type = 'text'
                value = {userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='UserName'
            />
            <input 
                type = 'text'
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;