import React from "react";

export default function Form() {

    function handleFormSubmit(e) {
        e.preventDefault()
        console.log("submitted");

    }
    return (
        <form action="">
            <input type="text" placeholder="username" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}