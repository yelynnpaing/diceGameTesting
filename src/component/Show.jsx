import React from "react";
import "./Show.css"

const Show = ({face}) => {
    return (
        <i className={`fa-solid fa-dice-${face} show`}></i>
    )
}
export default Show;