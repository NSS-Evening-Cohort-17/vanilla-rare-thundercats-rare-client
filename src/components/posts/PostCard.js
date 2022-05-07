import React from "react";
import "./PostCard.css"

export const PostCard = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
        </div>
    )
}