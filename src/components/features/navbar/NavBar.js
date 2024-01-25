import React from 'react';
import logo from '../../pictures/logo.svg';
import { useNavigate } from 'react-router-dom';

export function NavBar (){

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return(
        <>
            <div className="Navbar p-1">
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <img src={logo} alt="" className="navbar-logo"/>
                    <button className="navbar-btn btn btn-outline-secondary" onClick={handleClick}>Login</button>
                </div>
            </nav>
            </div>
        </>
    )
}
