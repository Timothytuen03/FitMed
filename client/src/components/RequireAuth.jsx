import useAuth from "../useAuth";
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {
    const auth = useAuth();
    const nav = useNavigate();
    console.log(auth.userObject);
    if(!auth.userObject) {
        console.log("not logged in");
        return <Navigate to='/login'/>
    } else {
        console.log("logged in");
        return children;
    }
}

export default RequireAuth;