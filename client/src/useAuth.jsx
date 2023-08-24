import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export const myContext = createContext({});

export const Context = ({children}) => {
    const [userObject, setUserObject] = useState({});
    const [authenticated, setAuthenticated] = useState(false);
    const [loadingInitial, setLoadingInitial] = useState(true);

    const logoutUser = async () => {
        let result;
        console.log("logging out")
        await axios.post("http://localhost:4000/api/user/logout",
        {withCredentials: true, headers: { 'Content-Type': 'application/json' }} )
        .then((user) => {
            console.log(user)
            console.log(user.data);
            if(user.data) {
                result = true;
                setUserObject({});
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
                setUserObject(user.data._id);
                console.log(userObject);
                result = true;
            } else {
                setUserObject({});
                result = false;
            }
        })
        .catch(err => console.log(err))
        return result;
    }

    useEffect(() => {
        // withCredentials makes sure axios passes cookies from browser to the server
        axios.get("http://localhost:4000/getuser", { withCredentials: true }).then(res => {
            console.log(res);
            if(res.data) {
                console.log("setting data")
                setUserObject(res.data._id);
            }   
        }).catch(err => console.log(err))
        .finally(() => setLoadingInitial(false));
    }, []);

    return (
        <myContext.Provider value={{userObject, loginUser, logoutUser, loadingInitial}}>{!loadingInitial && children}</myContext.Provider>
    )
}

export default function useAuth() {
    return useContext(myContext);
};
