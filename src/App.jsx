import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select } from './chat'
import styles from './App.css'
import Sidebar from './components/Sidebar';
import Room from './components/Room';

@connect(select)
export default class App extends Component {
    render() {
        const { dispatch, users, rooms, messages, user } = this.props;

        return (
            <div>
                <Sidebar/>
                <div>
                    <Room roomId={0} messages={messages} userId={5}/>
                </div>
            </div>
        );
    }
}
