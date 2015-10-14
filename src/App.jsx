import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select } from './chat'
import { setActiveTab, changeTheme, toggleMobile } from './chat/actions'
import { chat } from './App.css'
import Sidebar from './components/Sidebar';
import Room from './components/Room';

@connect(select)
export default class App extends Component {
    render() {
        const { dispatch, users, rooms, messages, user, activeTab, theme, mobile } = this.props;

        return (
            <div className={chat}>
                <Sidebar
                    theme={theme}
                    rooms={rooms}
                    activeTab={activeTab}
                    mobile={mobile}
                    onTabChange={tabName => dispatch(setActiveTab(tabName))}
                    onThemeChange={themeName => dispatch(changeTheme(themeName))}
                />
            <Room theme={theme} roomId={0} messages={messages} userId={5}/>
            </div>
        );
    }
}
