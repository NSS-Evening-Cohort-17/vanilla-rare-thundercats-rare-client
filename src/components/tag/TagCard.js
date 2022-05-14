import React from "react"
import { useHistory } from "react-router-dom"
import { deleteTag } from "../modules/TagManager";
//import "./TagCard.css"

export const TagCard = ({tag}) => {
    const history = useHistory();

    return (
        <div className="card">
            <div className="tag-content">
                <h3><span className="tag__title">{tag.label}
                {/* <button type="button" className="edit-btn">Edit</button> */}
                <button onClick={() => {
                    history.push(`/tags/edit/${tag.id}`)
                }}>Edit</button>
                {/* <button type="button" className="delete-btn">Delete</button> */}
                <button onClick={() => deleteTag(tag.id).then(() => history.push("/tags"))}>Delete</button>
                </span></h3>
            </div>
        </div>
    )
}
