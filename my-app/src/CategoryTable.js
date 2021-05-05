import React from 'react'

const CategoryTable = ({ items, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className="categories">
      {items.map(item => (
         <div>
         <h3>{item.name}</h3>
          <h4>{item.threads}</h4>
          </div>
      ))}

    </section>)
}

export default CategoryTable