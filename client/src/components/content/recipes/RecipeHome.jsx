import React, { useState, button } from 'react'
import RecipeCategory from './RecipeCategory'
import RecipeAside from './RecipeAside'
import './recipe.css'
import useAuth from '../../../useAuth';

export default function RecipeHome() {
  const [sidebar, setSidebar] = useState(false);
  const {userObject} = useAuth();
  console.log(userObject)

  return (
    <div>
      <button onClick={() => setSidebar(!sidebar)}>
        <p>{sidebar ? "Close" : "Open"}</p>
      </button>
      {sidebar && <RecipeAside />}
      <RecipeCategory/>
    </div>
  )
}
