import React from "react";

function Product({ title = "optional", price = 0, features, features2 = {} }) {
    // const list = features.map((feature)=> <li>{feature}</li>)
    let style = {
        backgroundColor: price>10000 ? "yellow" : null,
        margin: 5,
        padding: 6,
        border: 2
    }
    return (
        <div style={style}>
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            {price > 11000 ? <p>Discount 5 %</p> : null}
            <h5>Fetaures: {features}</h5>
            {/* <h5>Features:</h5> */}
            {/* <ul>
                {features.map((feature,index) => (
                    <li key="index">{feature}</li>
                ))}
            </ul> */}
            <h5>Fetaures2: {features2.a}</h5>
        </div>
    )
}

export default Product