import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import { CommentCard } from './CommentCard'
import { getCommentsById } from './CommentManager'
import { getComments } from './CommentManager'
import { getAllPosts } from '../modules/PostManager'

const CommentList = () => {
    const [comments, setComments] = useState([]);
    // const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const token = JSON.parse(localStorage.getItem("token"))

    const { id } = useParams();
    // const loadComments = () => {
    //     getComments().then((retrievedComments) => {
    //         setComments(retrievedComments);
    //     });
    // };
    // const retrievePosts = () => {
    //     loadComments().then((test) => {
    //         console.log(test);
    //     });
    //     getAllPosts().then((retrievedPosts) => {
    //         // console.log(retrievedPosts);
    //         // setPosts(filteredPosts);
    //         comments.filter(comment => {
    //             // for (const p of posts) {
    //             retrievedPosts.forEach((post) => {
    //                 if (comment.post_id === post.id) {
    //                     setComments([...comments, comment.content])
    //                 };
    //             });
    //             // }
    //         });
    //     });
    // };
    
    // for (const p of posts) {
    //     if(comment.post_id === p.id){
    //         setComments([...comments, c.content])
    //     }}

    // console.log(posts)
    useEffect(() => {
        getAllPosts().then((retrievePosts) => {
            setPosts(retrievePosts)
        })
    }, [])
    useEffect(() => {
        // loadComments();
        // retrievePosts();
        getCommentsById(id).then((retrieveComments) => {
            setComments(comments => [...comments, retrieveComments])
        })
        setIsLoading(false);
    }, []);

    

    console.log(comments)
    console.log(posts)
    return (
    <div>
        {isLoading ? (<h3>Loading...</h3>) : (comments.map((comment, index) => 
        <CommentCard 
            key={index} 
            comment={comment}
        />
            ))}
    </div>
  )
}

export default CommentList