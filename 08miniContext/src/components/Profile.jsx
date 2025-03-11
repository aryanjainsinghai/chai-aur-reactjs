import React, { useState, useContext, use } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>plz login</div>
    return <div>welcpme {user.username}</div>
}

export default Profile