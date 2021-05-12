import React, { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { loadThreads, setTitle, setContent, setCreatedBy, postThread  } from './redux/threadSlice';

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
     <h1>Thread form</h1>
     
      <h4>Add new thread</h4>
      <input type="text" placeholder="Write title..." onChange={(event) => dispatch(setTitle(event.target.value)) } ></input>
      <input type="text" placeholder="Write content..." onChange={(event) => dispatch(setContent(event.target.value)) } ></input>
      <input type="text" placeholder="Created by..." onChange={(event) => dispatch(setCreatedBy(event.target.value)) } ></input>
      <button onClick={() => dispatch(postThread(addThreadForm))}>Create thread</button>
    </>
);
};

export default Thread;

