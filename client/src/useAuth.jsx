import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';


export const myContext = createContext({});

export const Context = ({children}) => {
    const [userObject, setUserObject] = useState();

    const logoutUser = async () => {
        let result;
        await axios.post("http://localhost:4000/api/user/logout",
        {withCredentials: true, headers: { 'Content-Type': 'application/json' }} )
        .then((user) => {
            console.log(user.data);
            if(user.data) {
                result = true;
                setUserObject(null);
            } else {
                result = false;
            }
        })
        .catch(err => console.log(err))
        return result;
    }

    const loginUser = async (username, password) => {
        let result;
        await axios.post("http://localhost:4000/api/user/login", {
            username: username,
            password: password,
        }, {withCredentials: true, headers: { 'Content-Type': 'application/json' }} )
        .then((user) => {
            
            console.log(user);
            console.log(userObject);
            if(user.data) {
                setUserObject(user.data);
                console.log(userObject);
                result = true;
            } else {
                result = false;
            }
        })
        .catch(err => console.log(err))
        return result;
    }

    useEffect(() => {
        // withCredentials makes sure axios passes cookies from browser to the server
        axios.get("http://localhost:4000/getuser", { withCredentials: true }).then(res => {
            console.log(res.data);
            if(res.data) {
                console.log("setting data")
                setUserObject(res.data);
            }   
            console.log(userObject);
        }).catch(err => console.log(err))
    }, []);

    return (
        <myContext.Provider value={{userObject, setUserObject, loginUser, logoutUser}}>{children}</myContext.Provider>
    )
}

export default function useAuth() {
    return useContext(myContext);
};
