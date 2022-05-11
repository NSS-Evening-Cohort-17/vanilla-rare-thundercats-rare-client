import React from "react";
import { useEffect, useState } from "react";
import { getPostsByUserId, deletePost } from '../modules/PostManager.js'
import { MyPostsCard } from './MyPostsCard.js'

export const MyPosts = ( {token} ) => {
    const [currentUserId, setCurrentUserId] = useState(parseInt(token));
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsByUserId(currentUserId).then((retrievedPosts) => {
            setPosts(retrievedPosts)
        })
    }, []);

    const handleDeletePost = (id) => {
        deletePost(id)
        .then(() => getPostsByUser(currentUserId).then(setPosts))
        .then(window.location.reload());
    }

    return (
        <div>
            <h1>My Posts</h1>
            <div>
                <section>
                    {posts.map(post => <MyPostsCard key={post.id} post={post} handleDeletePost={handleDeletePost} />)}
                </section>
            </div>
        </div>
    )
}