import React from 'react'
import firstlogo from '../../pictures/cta-logo-one.svg'
import secondlogo from '../../pictures/cta-logo-two.png'
import bg from '../../pictures/login-background.jpg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";



export default  function Login(){

  const navigate = useNavigate()

   // state for the form field
   const [email, setEmail] = React.useState("")
   const [password, setPassword] = React.useState("")
   const [isFormValid, setIsFormValid] = React.useState(false)
   const logged = localStorage.getItem('my-key') ? true : false
 
   // pattern test regex
   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
   var pattern  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/


   // use Effect to render on change of fields
  React.useEffect(() => {
    if(emailPattern.test(email) && pattern.test(password)) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }    
    
  }, [email, password]);
 

  const notify = () => toast.success('Login Successful', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  // handle submit on click
  const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('my-key', "logged")
    notify()
    navigate("/home");
  };






    return(
        <>
        <div className="container-fluid">
            <div className="login-body">
                <Background>
                <img alt="..." src={bg}/>
                </Background>
                <div className="center" id="mydiv">
                    <img src={secondlogo} alt="" className="secondlogo"/>
                    <img src={firstlogo} alt="" className="firstlogo"/>
                {!logged ? <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <div >
                      <TextField
                        className='field bg-white'
                        margin="normal"
                        required
                        fullWidth
                        error = {email.length === 0 || (emailPattern.test(email)) ? false : true}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        // autoFocus
                      />
                      
                      </div>
                      <TextField
                        className='field bg-white'
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        error = {password.length === 0 || (pattern.test(password)) ? false : true}
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                        <Button
                          className="login-btn btn btn-primary"
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          disabled={!isFormValid}
                        >
                          Sign In
                      </Button>
                </Box> : <h1 className='text-center'>Your are already logged in</h1>}
                    
                    <p className="login-dis">Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As
                    of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>                
                </div>
            </div>
            </div>
            
        </>
    )
}


const Background = styled.div`
  left: 0px;
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;