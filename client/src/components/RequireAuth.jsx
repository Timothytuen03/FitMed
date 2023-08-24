import useAuth from "../useAuth";
import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const RequireAuth = ({children}) => {
    // const {userObject} = useAuth();
    // console.log(userObject)
    // if(!userObject) {
    //     console.log(userObject);
    //     console.log("not logged in");
    //     return <Navigate to='/login'/>
    // } else {
    //     console.log("logged in");
    //     return children;
    // }

    // async function retrieveUser() {
    //     let userResult;
    //     await axios.get("http://localhost:4000/getuser", { withCredentials: true }).then(res => {
    //         console.log(res);
    //         userResult = res.data;
    //         // if(res.data) {
    //         //     console.log("logged in");
    //         //     return (children);
    //         // } else {
    //         //     console.log("not logged in")
    //             // return <Navigate to='/login'/>
    //         // }
    //     }).catch(err => console.log(err))
        
    //     if(userResult) {
    //         console.log("logged in");
    //         return (children);
    //     } else {
    //         console.log("not logged in");
    //         return <Navigate to='/login'/>
    //     }
    // }
    // return retrieveUser();

}

export default RequireAuth;