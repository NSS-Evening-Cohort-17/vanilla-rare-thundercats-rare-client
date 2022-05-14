import React from "react";
import "./PostCard.css"

export const MyPostsCard = ( {post, handleDeletePost, handleEditPost} ) => {

    return (
        <div className="card">
            <div className="card-content">
                <img src={post.user_image} />
                <p>{post.username}</p>
                <h3><span className="post__title">{post.title}</span></h3>
                <img src={post.image_url} />
                <p>{post.content}</p>
                <button type="button" className="edit-btn">Edit</button>
                <button type="button" className="delete-btn" onClick={() => handleDeletePost(post.id)}>Delete</button>
            </div>
        </div>
    )
}