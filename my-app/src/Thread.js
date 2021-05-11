import React, { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { loadThreads, setTitle, postThread  } from './redux/threadSlice';

const Thread = () => {
     
     const dispatch = useDispatch();
     const threads = useSelector(state => state.thread.data);
     const addThreadForm = useSelector(state => state.thread.addThreadForm);
     useEffect(() => {
         if (!threads.lenght){
             dispatch(loadThreads());
         }

     })

    return  (
    <>
     <h3>Thread</h3>
     <ul>
     {threads.map(thread =>(
         <li key={thread.createdBy}>{thread.title}</li>
     ))}
     
      </ul>
      <h2>Add new thread</h2>
      <input type="text" placeholder="Write here..." onChange={(event) => dispatch(setTitle(event.target.value)) } ></input>
      <button onClick={() => dispatch(postThread(addThreadForm))}>Create thread</button>
    </>
);
};

export default Thread;

