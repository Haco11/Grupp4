import axios from "axios";
import { useState, useEffect } from "react";
export const GetData = () => {
  const [apiData, setApiData] = useState([]);
  const handleApi = async () => {
    const newData = await axios(
      "https://forum-api-jkrop.ondigitalocean.app/category/60925471e747d9001dee977f/thread"
    );
    setApiData([...apiData, newData]);
  };
  useEffect(() => console.log(apiData), [apiData]);
  return (
    <div>
      {" "}
      <button onClick={() => handleApi()}>click here</button>{" "}
      {apiData &&
        apiData.map((d) => (
          <div key={d?.id}>
            {" "}
            <h1>{d?.data.content}</h1>{" "}
          </div>
        ))}{" "}
    </div>
  );
};
