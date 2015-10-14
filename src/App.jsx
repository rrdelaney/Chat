import React, { Component } from 'react'
import { connect } from 'react-redux'
import { select } from './chat'
import { setActiveTab, changeTheme, toggleMobile, toggleSidebar } from './chat/actions'
import { chat, chatContainer } from './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Room from './components/Room'

@connect(select)
export default class App extends Component {
    render() {
        const { dispatch, users, rooms, messages, user, activeTab, theme, mobile, showSidebar } = this.props;

        return (
            <div className={chatContainer}>
                {!mobile ? null : <Navbar
                                    theme={theme}
                                    onToggleSidebar={() => dispatch(toggleSidebar())}/>
                }
                <div className={chat}>
                    {!showSidebar ? null : <Sidebar
                        theme={theme}
                        rooms={rooms}
                        activeTab={activeTab}
                        mobile={mobile}
                        onTabChange={tabName => dispatch(setActiveTab(tabName))}
                        onThemeChange={themeName => dispatch(changeTheme(themeName))}
                        onToggleMobile={() => dispatch(toggleMobile())}/>
                    }
                    <Room
                        theme={theme}
                        mobile={mobile}
                        roomId={0}
                        messages={messages}
                        userId={5}/>
                </div>
            </div>
        );
    }
}
