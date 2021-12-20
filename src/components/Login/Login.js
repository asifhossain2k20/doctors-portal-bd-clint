import React from 'react';
import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import LoginForm from './LoginForm/LoginForm';
import { handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './LoginManager';

const Login = () => {
    const [user,setUser]=useState({
        isSignIn: false,
        name:'',
        email:'',
        password:'',
        photo:''
      })
      initializeLoginFramework()
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history=useHistory();
    const location=useLocation();
  
    let { from } = location.state || { from: { pathname: "/" }};
  
    const googleSignIn=()=>{
      handleGoogleSignIn()
      .then(res=>{
        handleResponse(res,true)
      })
    }
  
    const signOut=()=>{
      handleSignOut()
      .then(res=>{
        handleResponse(res,false)
      })
  
    }
    const handleResponse=(res,redirect)=>{
        setUser(res);
       setLoggedInUser(res);
       if(redirect){
         history.replace(from);
       }
       
    }
    return (
        <section className="container">
        
        <div className="container text-center bg-light p-3">
            <h1>Doctor Protal BD</h1>
            <h2 className="mt-3 text-danger">Please Sign in Using Google</h2> 
            <br />
            <button className="m-2 btn btn-primary" onClick={googleSignIn}>
                 <h3>Sign In Using Google</h3></button>
            <LoginForm></LoginForm>
            
 
        </div>
        </section>
    );
};

export default Login;
