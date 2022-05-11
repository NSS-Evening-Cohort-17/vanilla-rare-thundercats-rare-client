import React from "react"
import { Route } from "react-router-dom"
import { UserCard } from "./user/UserCard"
import { UserList } from "./user/UserList"
import { CategoryList } from "./category/CategoryList"
import { TagList } from "./tag/TagList"
import { TagForm } from "./tag/TagForm"

export const ApplicationViews = ({token, setToken}) => {
  return (
    <>
    {/* <UserList></UserList> */}
    <h1 >Welcome to Rare Publishing</h1>

      <Route>
        <Route path="/Tag Management" element={<TagList />} />
      </Route>

      <Route exact path="/tags/create">
        <TagForm />
      </Route>

    </>
  )
}
