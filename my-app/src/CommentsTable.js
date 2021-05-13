import React from 'react'
import Likes from './Likes';

const CommentsTable = ({ comments, isLoading}) => {
    return (<section className="comments">
      {comments.map(comment => (
        
         <div>
        <li><p>{comment.content}</p>
        <p>{comment.createdBy}</p> </li>
        <Likes/>
        
        </div>
       
      ))}

    </section>)
}

export default CommentsTable