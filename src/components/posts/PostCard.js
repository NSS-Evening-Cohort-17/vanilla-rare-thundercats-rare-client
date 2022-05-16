import React from "react";
import "./PostCard.css"
import { Link } from 'react-router-dom'

export const PostCard = ( {post} ) => {

    return (
        <div className="card">
            <div className="card-content">
                <img src={post.user_image} />
                <p>{post.username}</p>
                <h3><span className="post__title">{post.title}</span></h3>
                <img src={post.image_url} />
                <p>{post.content}</p>
                <Link to={`/posts/${post.id}`}>
                    <button>View Comments</button>
                </Link>
            </div>
        </div>
    )
}