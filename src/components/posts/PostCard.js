import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css"

export const PostCard = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <h3>Posted By: {post.author}</h3>
        </div>
    )
}