import React, { Component } from 'react';
import { room } from './Room.css';
import ChatBox from './ChatBox';
import Message from './Message';

export default class Room extends Component {
    render() {
        let messages = this.props.messages.filter(message => (
            message.roomId === this.props.roomId
        ));

        return (
            <div className={room}>
                {messages.map(message => (
                    <Message key={message.id} authorId={message.authorId} userId={this.props.userId} text={message.text}/>
                ))}
                <ChatBox/>
            </div>
        );
    }
}
