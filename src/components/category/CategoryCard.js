import React from "react"
import { Link } from "react-router-dom"
import "./Category.css"

export const CategoryCard = ({ category, handleDeleteCategory }) => {
  return (
  <div className="card">
      <div className="card-content">
        <h3 className="category__title">
          <Link to={`/categories/${category.id}`}>
              { category.label }
          </Link>    
        </h3>
        <button type="button" className="edit-btn">Edit</button>
        <button type="button" className="delete-btn" onClick={() => handleDeleteCategory(category.id)}>Delete</button>
      </div>
  </div>
  )
}
