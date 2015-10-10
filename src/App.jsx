import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select } from './chat'

@connect(select)
export default class App extends Component {
    render() {
        const { dispatch, users, rooms, messages } = this.props;

        return (
            <div>
                <h3>Rooms</h3>
                <div>{rooms.map((room) => (
                    <p key={room.id}>{room.name} ({room.id})</p>
                ))}</div>
                <h3>Messages</h3>
                <div>{messages.map((message) => (
                    <p key={message.id}>{message.text} ({message.id}) - {message.authorId}</p>
                ))}</div>
                <h3>Users</h3>
                <div>{users.map((user) => (
                    <p key={user.id}>{user.name} ({user.id})</p>
                ))}</div>
            </div>
        );
    }
}
