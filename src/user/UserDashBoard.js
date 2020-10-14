import React from 'react'
import auth from '../config/auth'
import { useAuthState } from "react-firebase-hooks/auth";

const UserDashBoard = () => {
    const [user] = useAuthState(auth);
    // this is user dashboard, that i need to make
    // i am considering that this user is an JSON object; which is being certain properties.
    return (
        <div class="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user}'s Watch List
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                { user.watchlist.each( listName=> <button className="drop-down-item">listName</button> ) }
            </div>
        </div>
    )
}

export default UserDashBoard
