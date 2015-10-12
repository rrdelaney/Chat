import React from 'react';
import { own, messageContainer, message } from './Message.css';

export default function Message({text, authorId, userId}) {
    if (authorId === userId) {
        return <div className={`${own} ${messageContainer}`}>
            <p className={`${message} ui inverted grey segment`}>
                {text}
            </p>
        </div>
    } else {
        return <div className={`${messageContainer}`}>
            <p className={`${message} ui inverted teal segment`}>
                {text}
            </p>
        </div>
    }
}
