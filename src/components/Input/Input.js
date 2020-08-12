import React from 'react';

import './Input.css';

const Input = ( { setMessage, sendMessage, message } ) => (
    <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Type a message..."
          value={message} 
          //onChange={(event) => setMessage(event.target.value)} 
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
        {/* e just represents the React event, instead of writing out event can just use 'e'*/}
    </form>
)

export default Input