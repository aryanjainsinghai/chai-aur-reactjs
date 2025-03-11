import React from "react";

function Price({oldPrice, newPrice}) {
    return (
        <div>
            <span>{oldPrice}</span>
            &nbsp;
            <span>{newPrice}</span>
        </div>
    )
}

export default Price