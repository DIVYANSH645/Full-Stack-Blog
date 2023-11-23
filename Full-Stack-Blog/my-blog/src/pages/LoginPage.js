import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import{getAuth,signInWithEmailAndPassword} from 'firebase/auth'

const LoginPage =()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    
    const navigate=useNavigate();
    const Login= async()=>{
        try{
        await signInWithEmailAndPassword(getAuth(),email,password);
        navigate('/articles');
        }catch(e){
        setError(e.message);
    }
}
    
    return(
        <>
        <h1>Log In</h1>
        {error &&<p className="error">{error}</p>}
        <input 
         placeholder="Your Email address"
         value={email}
         onChange={e=> setEmail(e.target.value)}
        />
        <input
        placeholder="Password"
        value={password}
        onChange={e=> setPassword(e.target.value)}
         typeof="password"/>
        <button onClick={Login} >LogIN</button>
        <Link to="/craete-account">Don't have account ?Create on here</Link>
        </>
        
    );
}
export default LoginPage;