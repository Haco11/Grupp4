import React, { useEffect , useState } from 'react';
import axios from 'axios';
import ThreadsTable from './ThreadsTable'
import Thread from './ThreadFrom'


const Threads = () => 
{


    const [elements, setElements] = useState([])
    const [isLoading, setIsLoading] = useState (true)
    
    useEffect(() => {

      

       const fetchElements = async () => {
         const result = await axios(`https://forum-api-jkrop.ondigitalocean.app/category/6092645ee747d9001dee9785/thread


         `)
  
         console.log(result.data)
  
         setElements(result.data)
         setIsLoading(false)
       }
  
       fetchElements()
    },  [])
    
    return (
        <div className='container'>
<<<<<<< HEAD
=======
            <h1>Threads</h1>
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
            <ThreadsTable isLoading={isLoading} elements={elements} />
            <Thread/> 
        </div>
      ) 
    }



export default Threads;