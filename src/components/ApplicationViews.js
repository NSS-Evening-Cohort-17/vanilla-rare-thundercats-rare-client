import React from "react"
import { Route } from "react-router-dom" 
import { CategoryList } from "./category/CategoryList"

export const ApplicationViews = () => {
  return (
    <>
      <h1 >Welcome to Rare Publishing</h1>

      <Route>
        <Route path="/categories" element={<CategoryList />} />
      </Route>

    </>
  )
}
