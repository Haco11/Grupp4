import React, { useEffect , useState } from 'react';

const CategoryTable = () => {

    const categoryURL = "";

    const [ cotegoryData, setCategoryData ] = useState ([]);

    useEffect ( () => {
        fetch(categoryURL)
          .then (res => res.json())
          .then( data => )
    })

    return (<div>Table should be here</div>)
}

export default CategoryTable;