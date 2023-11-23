import { useState,useEffect } from "react"
import{getAuth,onAuthStateChanged} from 'firebase/auth'

const useUser =()=>{
    const[user,SetUser]= useState(null);
    const[isLoading,setIsLoading]= useState(null);

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(getAuth(),user =>{
            SetUser(user);
            setIsLoading(false);
        });
        return unsubscribe;
    },[]);

    return{user,isLoading};

}
export default useUser;