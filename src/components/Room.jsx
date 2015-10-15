import React, { Component } from 'react'
import { room } from './Room.css'
import ChatBox from './ChatBox'
import Message from './Message'

export default class Room extends Component {
    render() {
        let messages = this.props.messages.filter(message => (
            message.roomId === this.props.roomId
        ));

        let height = this.props.mobile ? 'calc(100vh - 4rem)' : '100vh';

        return (
            <div className={room} style={{height}}>
                {messages.size > 0 ? messages.map(message => <Message
                    theme={this.props.theme}
                    key={message.id}
                    authorId={message.authorId}
                    authorName={this.props.users.find(user => user.id === message.authorId).name}
                    userId={this.props.userId}
                    text={message.text}/>
                ) : <span>Looks like there aren't any messages here!</span>}
                <ChatBox theme={this.props.theme}/>
            </div>
        );
    }
}
