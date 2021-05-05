import React, { useEffect , useState } from 'react';
import axios from 'axios';
import ThreadsTable from '../ThreadsTable'

const Threads = () => 
{

    const [elements, setElements] = useState([])
    const [isLoading, setIsLoading] = useState (true)
    
    useEffect(() => {
       const fetchElements = async () => {
         const result = await axios(`https://forum-api-jkrop.ondigitalocean.app/category/60925471e747d9001dee977f/thread

         `)
  
         console.log(result.data)
  
         setElements(result.data)
         setIsLoading(false)
       }
  
       fetchElements()
    },  [])
    
    return (
        <div className='container'>
            <h1>Threads</h1>
            <ThreadsTable isLoading={isLoading} items={elements} />
          
        </div>
      ) 
    }



export default Threads;