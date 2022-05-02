import React from "react";
import {auth, provider} from"../utils/firebase"
import "../styles/Login.css";
import {Button} from '@material-ui/core'
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";


function Login(){
    const [state, dispatch] = useStateValue();
   const signIn = () =>{
       
       auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
     .catch ((error) => alert(error.message))

    }
    return(
        
       <div style={{display:"grid", placeItems:"center", height:"100vh"}} className="login">
           <div style={{display:"flex", flexDirection:"column"}} className="login__logo">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
               alt="flexbook logo"style={{height:"150px", objectFit:"contain"}} />
            <h1 style={{color:"#2e81f4", padding:"20px", margin:"40px", fontSize:"50px"}}>flexbook</h1>
           </div>
           <Button style={{backgroundColor:"#c6cacf", color:"#2e81f4", fontWeight:"800", width:"300px"}} type="submit" onClick={signIn}>
               Sign In
           </Button>
     </div>
    )
}

export default Login;