import { useState } from "react";
import {auth} from "../config/firebase";
import { createUserWithEmailAndPassword ,signOut} from "firebase/auth";





export const Auth = ()=>{
    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    console.log(auth?.currentUser?.email);
    const signin =async()=>{
        try{
        await createUserWithEmailAndPassword(auth,email, password); 
    }
        catch(err){console.error(err);}

    }
    const signout = ()=>{
        signOut(auth);
    }
    return(
    <div> 
        <input placeholder="email..." onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder="password..." type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={signin}>Sign in</button>
        <button onClick={signout}>Sign out </button> 
    </div>
    )
}