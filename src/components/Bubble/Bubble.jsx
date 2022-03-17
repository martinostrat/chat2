import React from "react";

function Bubble({text, user, datetime}) {
    return (
        <div className="bubble">
            <div className="bubble-text">{text}</div>
            <span className="bubble-text-sendername">{user}</span>
            <span className="bubble-text-date-time">{datetime}</span>
        </div>
    );
}

export default Bubble;