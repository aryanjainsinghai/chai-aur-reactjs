import React from "react";

function Card(props) {
    // console.log(props);
    console.log(props.username);
    let username =props.username
    let btntext = props.btntext
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{username}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{btntext}</button>
                </div>
            </div>
        </div>
    )
}

export default Card