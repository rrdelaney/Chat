import React, { Component } from 'react';
import { ownMessage, chatMessage, messageContainer } from './Room.css';

export default class Room extends Component {
    render() {
        let messages = this.props.messages.filter(message => (
            message.roomId === this.props.roomId
        ));

        return (
            <div className="ui basic segment">{messages.map(message => (
                <div key={message.id} className={[messageContainer, message.authorId === this.props.userId ? ownMessage : ''].join(' ')}>
                    <p className={chatMessage}>
                        {message.text}
                    </p>
                </div>

            ))}</div>
        );
    }
}
