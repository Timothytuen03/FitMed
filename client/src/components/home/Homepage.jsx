import React, { useEffect } from "react";
import "./homepage.css";
import healthyHeart from "./images/heart-healthy-food-1580231690.jpg";
import {  Link } from "react-router-dom";


export default function homepage() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);

    return(
        <div className="container">
            <h1>{message}</h1>
            <div className="top-portion">
                <h1 style={{fontSize: 64}}>Fitmed</h1>
                <h3 style={{fontSize: 36}}>Join others in the journey to eating healthy and happily</h3>
                <div className="account-buttons">
                    <Link to="create-account" className="create-btn btn">Create an Account</Link>
                    <Link to="login" className="log-btn btn">Log in</Link>
                    {/* <button className="create-btn btn">Create an Account</button>
                    <button className="log-btn btn">Log in</button> */}
                </div>
                <img src={healthyHeart} alt="healthy-food-heart" style={{maxWidth: 500}}/>
            </div>
            <div>
                <h3 style={{fontSize: 36}}>Elevate your health through delicious and beneficial eating</h3>
                <div className="bottom-portion">
                    <div className="desc-col">
                        <p>Track what and how much you've eaten each day</p>
                        <p>Save your own recipes by category</p>
                    </div>
                    <div className="desc-col">
                        <p>Automatically calculate macros for each recipe saved</p>
                        <p>Discover and share new recipes with others</p>
                    </div>
                </div>
            </div>
        </div>
    )
}