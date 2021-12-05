import {useRouter} from 'next/router'
import { useAuth } from '../../../lib/hooks/useAuth';
import { signOut } from '@firebase/auth';

import { auth } from '../../../lib/firebase';
import { IoPersonCircleSharp } from "react-icons/io5";
import {LoginStatus} from "./styles";

 function UserLoginStatus({size, color, status, ...props}) {
    const user = useAuth()
    const router = useRouter();

    function handleClick(){
            //sign out user
            signOut(auth)
            .then(()=>{
                router.push('/')
            })
    }

    if(user){
        return( 
            <LoginStatus bgcolor={"#789691"} onClick={handleClick}>
            <IoPersonCircleSharp size={size || "1.75rem"} color={color} />  
            <figcaption>
                <p>Status</p>
                <p>Logout</p>
            </figcaption>
            </LoginStatus>)
    }
    return( 
        <LoginStatus>
        <IoPersonCircleSharp size={size || "1.75rem"} color={color} />  
        <figcaption>
            <p>Status</p>
            <p>Please Login</p>
        </figcaption>
        </LoginStatus>)
   
}

export default UserLoginStatus