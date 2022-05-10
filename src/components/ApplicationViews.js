import React from "react"
import { Route } from "react-router-dom"
import { UserCard } from "./user/UserCard"
import { UserList } from "./user/UserList"

export const ApplicationViews = ({token, setToken}) => {
  return (
    <>
    <UserList></UserList>
    <h1 >Welcome to Rare Publishing</h1>
    </>
  )
}
