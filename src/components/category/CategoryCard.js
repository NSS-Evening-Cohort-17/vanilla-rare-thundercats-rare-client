import React from "react"
import "./Category.css"

export const CategoryCard = ({category}) => {
  return (
  <div className="card">
      <div className="card-content">
        <h3><span className="category__title">{category.label}
        <button type="button" className="edit-btn">Edit</button>
        <button type="button" className="delete-btn">Delete</button>
        </span></h3>
      </div>
  </div>
  )
}
