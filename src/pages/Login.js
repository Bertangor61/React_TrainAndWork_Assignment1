import React, { useEffect, useState } from 'react'
import "../styles/login.css"
const Login = ({setUser}) => {
    const [userInformations, setUserInformations] = useState({
        userName: "",
        email: "",
        password: "",
        products: []
    })

    const [loginInformations, setLoginInformations] = useState({
        email: "",
        password: ""
    })
    useEffect(() => {
        console.log(userInformations)
    }, [userInformations])

    const handleChangeRegister = (e) => {
        const { name, value } = e.target;
        setUserInformations(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

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
                // Db den gelen verileri kullan
                const foundUser = data.find(user=> user.email === loginInformations.email && user.password === loginInformations.password);
                if(foundUser) setUser(foundUser)
            })
            .catch(error => {
                console.error('There was a problem with the GET request:', error);
            });

    }
    const submitHandleRegister = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInformations),
        })
            .then(response => {
                // Burada yanıtı işle
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Yanıtı JSON formatına dönüştür
            })
            .then(data => {
                // Db den dönen verileri kullan
                console.log('Sign-up successful:', data);
            })
            .catch(error => {
                // hata durumu için
                console.error('There was a problem with the sign-up:', error);
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
                    <form onChange={handleChangeRegister} onSubmit={submitHandleRegister}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="userName" placeholder="User name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type='submit'>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
