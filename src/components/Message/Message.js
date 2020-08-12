import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
    let is_Sent_By_Current_User = false;

    const trimmed_Name = name.trim().toLowerCase();

    if(user === trimmed_Name) {
        is_Sent_By_Current_User = true;
    }

    return (
        is_Sent_By_Current_User
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmed_Name}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            )
    )
}

export default Message;