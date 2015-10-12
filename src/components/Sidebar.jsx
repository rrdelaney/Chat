import React, { Component } from 'react';
import { sidebar } from './Sidebar.css';
import RoomList from './RoomList';

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
                    return <RoomList rooms={this.props.rooms}/>
                case 'settings':
                default:
                    return <div></div>
            }
        })();

        return (
            <div className={sidebar}>
                <div className="ui inverted basic segment" style={{height:'100%'}}>
                    <div className="ui two item icon inverted secondary pointing menu">
                        <a className={[this.props.activeTab === 'rooms' ? 'active' : '', 'item'].join(' ')} onClick={this.handleClick('rooms')}>
                            <i className="users icon"></i>
                        </a>
                        <a className={[this.props.activeTab === 'settings' ? 'active' : '', 'item'].join(' ')} onClick={this.handleClick('settings')}>
                            <i className="setting icon"></i>
                        </a>
                    </div>
                    {activeTabContent}
                </div>
            </div>
        );
    }
}
