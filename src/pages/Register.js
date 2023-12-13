import React from 'react'
import { useState } from 'react'
import '../styles/login.css'
const Register = ({ setUser }) => {

    const [loginInformations, setLoginInformations] = useState({
        email: "",
        password: ""
    })

    const submitLoginHandle = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Db gelen verileri kullan
                const foundUser = data.find(user => user.email === loginInformations.email && user.password === loginInformations.password);
                if (foundUser) setUser(foundUser)
            })
            .catch(error => {
                console.error('There was a problem with the GET request:', error);
            });

    }
    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setLoginInformations(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    return (
        <div className='login-container'>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                    <form onChange={handleChangeLogin} onSubmit={submitLoginHandle}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
/*
    <div className='login-container'>
    <div className="main">
        <div className="login">
            <form onChange={handleChangeLogin} onSubmit={submitLoginHandle}>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
</div>


*/