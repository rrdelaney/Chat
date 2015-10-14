import React, { Component } from 'react';
import { sidebar } from './Sidebar.css';
import RoomList from './RoomList';
import Settings from './Settings';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(tabName) {
        return () => this.props.onTabChange(tabName);
    }

    render() {
        let activeTabContent = (() => {
            switch (this.props.activeTab) {
                case 'rooms':
                    return <RoomList theme={this.props.theme} rooms={this.props.rooms}/>
                case 'settings':
                    return <Settings
                        theme={this.props.theme}
                        mobile={this.props.mobile}
                        onThemeChange={this.props.onThemeChange}
                        onToggleMobile={this.props.onToggleMobile}
                />
                default:
                    <div></div>
            }
        })();

        let borderColor = this.props.theme.sidebar.indexOf('inverted') === -1 ? `1px solid ${this.props.theme.sidebar}` : 'none';

        return (
            <div className={sidebar} style={{borderRight: borderColor}}>
                <div className={`${this.props.theme.sidebar} ui basic segment`} style={{height:'100%'}}>
                    <div className={`${this.props.theme.sidebar} ui two item icon secondary pointing menu`}>
                        <a className={`${this.props.activeTab === 'rooms' ? 'active' : ''} item`} onClick={this.handleClick('rooms')}>
                            <i className="users icon"></i>
                        </a>
                        <a className={`${this.props.activeTab === 'settings' ? 'active' : ''} item`} onClick={this.handleClick('settings')}>
                            <i className="setting icon"></i>
                        </a>
                    </div>
                    {activeTabContent}
                </div>
            </div>
        );
    }
}
