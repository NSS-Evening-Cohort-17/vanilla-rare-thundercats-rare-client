import React from "react"
//import "./TagCard.css"

export const TagCard = ({tag}) => {
    return (
        <div className="card">
            <div className="tag-content">
                <h3><span className="tag__title">{tag.label}
                <button type="button" className="edit-btn">Edit</button>
                <button type="button" className="delete-btn">Delete</button>
                </span></h3>
            </div>
        </div>
    )
}
