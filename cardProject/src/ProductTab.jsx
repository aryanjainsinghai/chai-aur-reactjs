import React from "react";
import Product from "./components/Product";

function ProductTab() {
    let style = {
        display : "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div style={style}>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil (2nd gen)" idx={1} />
            <Product title="Zebronics ZEB" idx={2} />
            <Product title="Petronics toad" idx={3} />
        </div>
    )
}

export default ProductTab