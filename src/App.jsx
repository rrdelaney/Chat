import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { select } from './chat'
import { setActiveTab, changeTheme, toggleMobile, toggleSidebar, joinRoom } from './chat/actions'
import { chat, chatContainer } from './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Room from './components/Room'

@connect(select)
export default class App extends Component {
    render() {
        const { dispatch, users, rooms, messages, user, roomId, activeTab, theme, mobile, showSidebar } = this.props;

        let nav = !mobile ? null : <Navbar
            theme={theme}
            onToggleSidebar={() => dispatch(toggleSidebar())}/>

        let sidebar = <ReactCSSTransitionGroup transitionName="slide-left" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {!showSidebar ? null : <Sidebar
                key={'sidebar'}
                theme={theme}
                rooms={rooms}
                currentRoom={roomId}
                activeTab={activeTab}
                mobile={mobile}
                onTabChange={tabName => dispatch(setActiveTab(tabName))}
                onThemeChange={themeName => dispatch(changeTheme(themeName))}
                onToggleMobile={() => dispatch(toggleMobile())}
                onJoinRoom={(roomId) => dispatch(joinRoom(roomId))}/>}
        </ReactCSSTransitionGroup>

        let room = <Room
            theme={theme}
            mobile={mobile}
            roomId={roomId}
            messages={messages}
            users={users}
            userId={5}/>

        return (
            <div className={chatContainer}>
                {nav}
                <div className={chat}>
                    {sidebar}
                    {room}
                </div>
            </div>
        );
    }
}
