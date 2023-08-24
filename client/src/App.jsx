import React, { useContext, useEffect } from "react";
import Navigation from "./Navigation";
import useAuth, {myContext} from "./useAuth";

// const user = true;

export default function App() {
    const { userObject } = useContext(myContext);
    console.log("App");
    console.log(userObject);
    return (
        <Navigation user={userObject}/>
    )
}