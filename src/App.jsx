import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select } from './chat'
import { setActiveTab } from './chat/actions'
import { chat } from './App.css'
import Sidebar from './components/Sidebar';
import Room from './components/Room';

@connect(select)
export default class App extends Component {
    render() {
        const { dispatch, users, rooms, messages, user, activeTab } = this.props;

        return (
            <div className={[chat].join(' ')}>
                <Sidebar rooms={rooms} activeTab={activeTab} onTabChange={tabName => dispatch(setActiveTab(tabName))}/>
                <Room roomId={0} messages={messages} userId={5}/>
            </div>
        );
    }
}
