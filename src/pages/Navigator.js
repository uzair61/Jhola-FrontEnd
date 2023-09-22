import React from 'react';
import { useNavigate } from "react-router-dom"; 



export default function Navigator() {
 
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/..');
      };

    const signUpNavigate = () => {
        navigate('/register');
    }; 

    const categoryNavigate = () => {
        navigate('/category')
    } 

    const homeNavigate = () => {
        navigate('/')
    } 


    return (
        <div>
            
            <h1 style={{textAlign:"center", fontSize:"40px", color:"white", margin:"auto", backgroundColor:"navy"}}>
                Jhola.com
                </h1>
            <nav style={{textAlign:"end", cursor:'pointer'}}  >
                <a onClick={homeNavigate} style={{margin:' 0px 10px 0px 0px'}}> Home </a>
                <a onClick={categoryNavigate} style={{margin:' 0px 10px 0px 0px'}}> Category </a>
                <a onClick={signUpNavigate} >SignUp</a>
            </nav>
            <a onClick={navigateBack} style={{cursor:'pointer'}}>Back</a>
            <hr></hr>
            <hr></hr>
        </div>
    )
}

