import React from "react";
import Price from "./Price";

function Product({ title, price, idx }){ 

    let style = {
         border : "2px solid black",
         margin: "3px",
         padding: "5px",
         borderRadius: "5px",
    }

let oldPrices = ["12,495", "11,000", "52,000", "40,000"]
let newPrices = ["10,495", "11,999", "51,999", "41,999"]
let descriptions = ["8,000 DPI", "INTUITAIVE surface", "designes for ipad", "wireless"]
    return (
        <div className="Product" style={style}>
            <h4>{title}</h4>
            <p>{descriptions[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product