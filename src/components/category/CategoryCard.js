import React from "react"

export const CategoryCard = ({category}) => {
  return (
  <div className="card">
      <div className="card-content">
        <h3><span className="category__title">{category.label}
        </span></h3>
      </div>
  </div>
  )
}
