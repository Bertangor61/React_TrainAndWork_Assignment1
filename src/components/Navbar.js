import React from 'react'
import "../styles/navbar.css"
import { NavLink } from 'react-router-dom'
import photo from '../assets/logo.jpg'

const Navbar = ({ setCategory, setUserBasket, userBasket, user }) => {
    console.log('user', user)

    return (
        <div>
            <nav className="navigationWrapper">
                <div className="logoWrapper">
                    <img src={photo} className='logo-photo'/>

                </div>
                <ul className="navigation">
                    <li className="parent"><NavLink className="link" to="/" onClick={() => setCategory("tech")}>Teknoloji</NavLink></li>
                    <li className="parent"><NavLink className="link" to="/" onClick={() => setCategory("sanat")}>Sanat</NavLink></li>
                    <li className="parent"><NavLink className="link" to="/" onClick={() => setCategory("spor")}>Spor</NavLink></li>
                    <li className="parent"><NavLink className="link" to="/" onClick={() => setCategory("music")}>Müzik</NavLink></li>

                    <li className="parent"><NavLink className="link" to="/basket" >Sepetim</NavLink></li>

                    {/* User giriş yaptıysa siparişlerim gözüksün giriş yapmadıysa üye ol, giriş yap gözüksün. */}
                    {user ? (
                        <li className="parent"><NavLink className="link" to="/siparisler">Siparislerim</NavLink></li>

                    ) : <>
                        <li className="parent"><NavLink className="link" to="/login">Üye Ol</NavLink></li>
                        <li className="parent"><NavLink className="link" to="/register">Giriş Yap</NavLink></li>
                    </>}

                </ul>
            </nav>
        </div>
    )
}
export default Navbar
