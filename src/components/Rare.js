import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CategoryList } from "./category/CategoryList"
import { CategoryForm } from "./category/CategoryForm"
import { Posts } from "./posts/Posts"

export const Rare = () => {
  const [token, setTokenState] = useState(localStorage.getItem('token'))

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }

  return <>
    {
      token
        ?
        <Route>
          <NavBar token={token} setToken={setToken} />
          <ApplicationViews />
        </Route>
        :
        <Redirect to="/login" />
    }

    <Route exact path="/login" >
      <NavBar token={token} setToken={setToken} />
      <Login token={token} setToken={setToken} />
    </Route>

    <Route path="/register" exact>
      <NavBar token={token} setToken={setToken} />
      <Register token={token} setToken={setToken} />
    </Route>
  
    <Route path ="/" exact>
      <NavBar token={token} setToken={setToken} />
      <Posts token={token} setToken={setToken} />
    </Route>

    <Route exact path="/categories" >
      <CategoryList token={token} setToken={setToken} />
    </Route>

    <Route exact path="/categories/create">
      <CategoryForm token={token} setToken={setToken} />
    </Route>
  </>
}
