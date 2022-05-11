import React from "react"
import { UserList } from "./user/UserList"
import { Route } from "react-router-dom" 
import { CategoryList } from "./category/CategoryList"
import { TagList } from "./tag/TagList"

export const ApplicationViews = ({token, setToken}) => {
  return (
    <>
    {/* <UserList></UserList> */}
    <h1 >Welcome to Rare Publishing</h1>

      <Route>
        <Route path="/Tag Management" element={<TagList />} />
      </Route>

    </>
  )
}
