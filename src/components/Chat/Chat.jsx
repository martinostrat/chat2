import React from 'react';
import Bubble from '../Bubble/Bubble';
import data from '../../data.json';


function Chat(props) {
    return (
        <div className='box'>
            {data.map((item) => {
                return (<Bubble
                    user={item.username}
                    text={item.message}
                    datetime={item.date}
                />)
            })}
        </div>
    );
}

export default Chat;