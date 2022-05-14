import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../modules/PostManager";

export const PostDetails = () => {
    const params = useParams();
    const [postId, setPostId] = useState(parseInt(params.postId));
    const [post, setPost] = useState({});

    useState(() => {
        getPostById(postId).then((post) => {
            setPost(post);
        })
    }, []);

    return (
        <div className="card">
            <div className="card-content">
                <img src={post.user_image} />
                <h3>
                    <span className="post__title">{post.title}</span>
                </h3>
                <p>{post.username}</p>
                <p>{post.category_label}</p>
                <p>{post.publication_date}</p>
                <img src={post.image_url} />
                <p>{post.content}</p>
            </div>
        </div>
    )
}