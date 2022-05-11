import React from 'react'


export const CommentCard = ({comment}) => {
  return (
    <div className='CommentContainer'>
      <h1>Auther Name</h1>

      <p>
       {comment.content}
      </p>
      </div>
  )
}