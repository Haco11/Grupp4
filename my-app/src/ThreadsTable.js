import React from 'react'

const ThreadsTable = ({ elements, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className="threads">
      {elements.map(element => (
         
         <h4>{element.title}</h4>
          
      ))}

    </section>)
}

export default ThreadsTable