import React, { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0);

return (
<div>
    <p>Likes {counter}</p>
    <button onClick= {() => setCounter(counter + 1)}> Like </button>

</div>

 );
}

export default App;