import React from 'react'

const ThreadsTable = ({ elements, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className="categories">
      {elementss.map(element => (
         <div>
         <h4>{element.title}</h4>
          </div>
      ))}

    </section>)
}

export default ThreadsTable