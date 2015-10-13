import React, { Component } from 'react';
import { chatBox } from './ChatBox.css';

export default class ChatBox extends Component {
    render() {
        return (
            <div className={`${chatBox} ui left action input`}>
                <button className="ui blue labeled icon button">
                    <i className="send icon"></i>
                    Send
                </button>
                <input type="text" placeholder="Say Something!"/>
            </div>
        );
    }
}
