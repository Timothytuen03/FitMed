import React from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Navigate } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import RootLayout from "./layouts/RootLayout";
import CreateAccount from "./components/createAccount/CreateAccount";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import ActivityPage from "./components/content/activity/ActivityPage";
import RecipeHome from "./components/content/recipes/RecipeHome";
import RecipeCategory from "./components/content/recipes/RecipeCategory";
import DiscussionHome from "./components/content/discussion/DiscussionHome";
import DiscussionThread from "./components/content/discussion/DiscussionThread";
import DiscussionCategory from "./components/content/discussion/DiscussionCategory";

let user = true;

const router = createBrowserRouter(
    createRoutesFromElements(
        // RootLayout creates a navbar
        <Route>
            <Route index element={<Homepage/>}/>
            <Route path="/create-account" element={<CreateAccount/>}/>
            <Route path="/login" element={<Login/>}/> 
            <Route element={user ? (<RootLayout/>) : <Navigate replace to={"/"}/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/activity" element={<ActivityPage/>}/>
                <Route path="/recipe" element={<RecipeHome/>}/>
                <Route path="/recipe/:category" element={<RecipeCategory/>}/>
                <Route path="/discussion" element={<DiscussionHome/>}/>
                <Route path="/discussion/:threadTitle" element={<DiscussionThread/>}/>
                <Route path="/discussion/:category" element={<DiscussionCategory/>}/>
            </Route>
        </Route>
    )
)

export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}