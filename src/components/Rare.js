import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CategoryList } from "./category/CategoryList"
import { CategoryForm } from "./category/CategoryForm"
import { CategoryEditForm } from "./category/CategoryEditForm"
import { Posts } from "./posts/Posts"
import { CreatePost } from "./posts/CreatePost"
import { MyPosts } from "./posts/MyPosts"
import { TagList } from "./tag/TagList"
import { TagForm } from "./tag/TagForm"
import { PostDetails } from "./posts/PostDetails"

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
      <Posts token={token} setToken={setToken} />
    </Route>

    <Route path ="/my-posts" exact>
      <MyPosts token={token} setToken={setToken} />
    </Route>

    <Route path ="/new-post" exact>
      <CreatePost token={token} setToken={setToken} />
    </Route>

    <Route path="/posts/:postId">
      <PostDetails token={token} setToken={setToken}/>
    </Route>
    
    <Route exact path="/categories" >
      <CategoryList token={token} setToken={setToken} />
    </Route>

    <Route path="/categories/create">
      <CategoryForm token={token} setToken={setToken} />
    </Route>

    <Route path="/categories/:categoryId/edit">
      <CategoryEditForm token={token} setToken={setToken} />
    </Route>

    <Route path="/tags" exact>
      <TagList token={token} setToken={setToken} />
    </Route>

    {/* <Route exact path="/tags/create" >
      <TagForm />
    </Route> */}
  </>
}