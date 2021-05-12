import React, { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { loadComments, setTitle, setContent, setCreatedBy, postComment  } from './redux/commentSlice';

const Comment = () => {
     
     const dispatch = useDispatch();
     const comments = useSelector(state => state.comment.data);
     const addCommentForm = useSelector(state => state.comment.addCommentForm);
     useEffect(() => {
         if (!comments.lenght){
             dispatch(loadComments());
         }

     }) 

    return  (
    <>
     <h3>Comment</h3>
     <ul>
     {comments.map(comment =>(
         <div>
         <li key={comment.createdBy}>{comment.content}</li>

         </div>
     ))}
     
      </ul>
      <h2>Add new comment</h2>
      <input type="text" placeholder="Write title..." onChange={(event) => dispatch(setTitle(event.target.value)) } ></input>
      <input type="text" placeholder="Write content..." onChange={(event) => dispatch(setContent(event.target.value)) } ></input>
      <input type="text" placeholder="Created by..." onChange={(event) => dispatch(setCreatedBy(event.target.value)) } ></input>
      <button onClick={() => dispatch(postComment(addCommentForm))}>Send comment</button>
    </>
);
};

export default Comment

