import React, { useEffect , useState } from 'react';
import CommentForm from './CommentForm';
import CommentsTable from './CommentsTable'
import axios from 'axios';


const Comments = () => {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState (true)
    
    useEffect(() => {

      

       const fetchElements = async () => {
         const result = await axios(`https://forum-api-jkrop.ondigitalocean.app/thread/609275bee747d9001dee9792/comment`)
  
         console.log(result.data)
  
         setComments(result.data)
         setIsLoading(false)
       }
  
       fetchElements()
    },  [])
    

return(
 <div>
 <CommentsTable isLoading={isLoading} comments={comments} />

<CommentForm/>
</div>

)
};

   

export default Comments;