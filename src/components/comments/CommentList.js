import React, { useEffect, useState } from 'react' 
import { CommentCard } from './CommentCard'
import { getComments } from './CommentManager'

const CommentList = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then((retrieveComments) => {
            setComments(retrieveComments)
        })
    }, [])

    console.log(comments)

    return (
    <div>
        {comments.map((comment) => <CommentCard key={comment.id} comment={comment}/>)}
    </div>
  )
}

export default CommentList