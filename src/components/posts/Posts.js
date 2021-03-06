import React from "react";
import { useEffect, useState } from "react";
import { CommentForm } from "../comments/CommentForm.js";
import CommentList from "../comments/CommentList.js";
import { getAllPosts } from '../modules/PostManager.js'
import { PostCard } from './PostCard.js'
// import { PostDetail } from './PostDetail'

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then((retrievedPosts) => {
            setPosts(retrievedPosts)
        })
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <div>
                <section>
                    {posts.map(post => <PostCard key={post.id} post={post} />)}
                </section>
            </div>
        </div>
    )
}