import React from "react";

export default function Button() {
    function handleClick(event) {
        console.log("Hello");
        console.log(event);
        
    }

    return (
        <button onClick={handleClick}>click me!</button>
    )
}