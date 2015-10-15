import React, { Component } from 'react'
import { sidebar } from './Sidebar.css'
import RoomList from './RoomList'
import Settings from './Settings'

export default function Sidebar(props) {
    let handleClick = (tabName) => () => props.onTabChange(tabName);

    let Tabs = () => <div className={`${props.theme.sidebar} ui two item icon secondary pointing menu`}>
        <a className={`${props.activeTab === 'rooms' ? 'active' : ''} item`} onClick={handleClick('rooms')}>
            <i className="users icon"></i>
        </a>
        <a className={`${props.activeTab === 'settings' ? 'active' : ''} item`} onClick={handleClick('settings')}>
            <i className="settings icon"></i>
        </a>
    </div>

    let ActiveTabContent = () => {
        switch (props.activeTab) {
            case 'rooms':
                return <RoomList
                    theme={props.theme}
                    rooms={props.rooms}
                    currentRoom={props.currentRoom}
                    onJoinRoom={props.onJoinRoom}/>
            case 'settings':
                return <Settings
                    theme={props.theme}
                    mobile={props.mobile}
                    onThemeChange={props.onThemeChange}
                    onToggleMobile={props.onToggleMobile}/>
            default:
                <div></div>
        }
    };

    let borderRight = props.theme.sidebar.indexOf('inverted') === -1 ? `1px solid ${props.theme.sidebar}` : 'none';
    let position = props.mobile ? 'absolute' : 'inherit';
    let height = props.mobile ? 'calc(100% - 4rem)' : '100vh';

    return (
        <div className={`${sidebar}`} style={{borderRight, position, height}}>
            <div className={`${props.theme.sidebar} ui segment`}>
                <Tabs/>
                <ActiveTabContent/>
            </div>
        </div>
    );
}
