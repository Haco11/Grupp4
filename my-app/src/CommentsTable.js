import React from 'react'
import Likes from './Likes';

const CommentsTable = ({ comments, isLoading}) => {
<<<<<<< HEAD
    return (<section className="comments">
=======
    return isLoading ? (<h1>Loading...</h1>) : (<section className="comments">
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
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