import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select } from './chat'

@connect(select)
export default class App extends Component {
    render() {
        const { dispatch, members, rooms, messages } = this.props;

        console.log(messages);

        return (
            <div>{messages.map((message) => (
                <p>{message.text} - {message.authorId}</p>
            ))}</div>
        );
    }
}
