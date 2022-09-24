import React from "react";
import { useState } from "react";

const State = () =>{

    const [count , setCount] = useState(0);
    const handleClick = () =>{
        setCount(count+1)
    }

    return (
        <>  
            <h1>Hello State </h1>
            <h3>Your Click Scores {count}</h3>
            <button onClick={handleClick}>Click Here</button>
        </>
    )
}
export default State;