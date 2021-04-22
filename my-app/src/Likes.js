import React, { useState } from "react";

const App = () => {

  const [like, setLike] = useState(0);

return (
<div>
    <p>Likes {like}</p>
    <button onClick= {() => setLike(like + 1)}> Like </button>

</div>

 );
}

export default App;