import React, {useEffect, useState} from 'react';
import { useNavigate, } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { addComment } from './CommentManager';

export const CommentForm = () => {

    const [comment, setComment] = useState({
      author_id: JSON.parse(localStorage.getItem("token")),
      post_id: 0, 
      content: ""
    })

    const { id } = useParams();
    const history = useHistory()
    useEffect(() => {
      const newComment = {...comment}
      newComment.post_id = id

      setComment(newComment)
    }, [])

    const handleControlledInputChange = (event) => {
      event.preventDefault()
      
      const newComment = { ...comment }
      let selectedVal = event.target.value

      newComment[event.target.id] = selectedVal

      setComment(newComment)
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      addComment(comment).then(() => {
        history.push(`/posts`)
      })
    }

  return (
    <div className='ContainerForm'>
      <form>
        <label>Comment Section</label>
        <textarea type="text" id="content" value={comment.content} onChange={handleControlledInputChange}>Add a comment</textarea>
      </form>
      <button className='btn btn-primary' onClick={handleSubmit}>Post Comment</button>
    </div>
  )
}