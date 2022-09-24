import React from "react";
import "./Di.css";

const Di = ({face}, rolling) => {
    return(
        <i className={`fa-solid fa-dice-${face} die {rolling && shaking}`}></i>
    )
}
export default Di;