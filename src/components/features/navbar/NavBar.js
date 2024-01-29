import React from 'react';
import logo from '../../pictures/logo.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function NavBar (){

    // all state declaration
    const navigate = useNavigate()
    const status = localStorage.getItem('my-key') ? "Log-Out" : "Login"

    const notify = () => toast.success(status, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });


    // handle click on login and logout
    const handleClick = () => {
        if(status === "Login"){
            navigate('/login')
        }
        else{
            localStorage.removeItem('my-key')
            notify()
            navigate('/')
        }
    }


    return(
        <> 
        <div className="Navbar p-1">
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <img src={logo} alt="" className="navbar-logo"/>
                    <button className="navbar-btn btn btn-outline-secondary" onClick={handleClick}>{status}</button>
                </div>
            </nav>
        </div>
        </>
    )
}
