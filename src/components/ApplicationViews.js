import React from "react"
import { Route } from "react-router-dom" 
import { CategoryList } from "./category/CategoryList"
import { TagList } from "./tag/TagList"

export const ApplicationViews = () => {
  return (
    <>
      <h1 >Welcome to Rare Publishing</h1>

      <Route>
        <Route path="/categories" element={<CategoryList />} />
      </Route>

      <Route>
        <Route path="/Tag Management" element={<TagList />} />
      </Route>

    </>
  )
}
