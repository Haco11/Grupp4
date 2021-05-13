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
            <ThreadsTable isLoading={isLoading} elements={elements} />
            <Thread/> 
        </div>
      ) 
    }



export default Threads;