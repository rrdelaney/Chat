import React, { Component } from 'react'
import { navbar } from './Navbar.css'

export default class Navbar extends Component {
    render() {
        let borderColor = this.props.theme.sidebar.indexOf('inverted') === -1 ? `1px solid ${this.props.theme.sidebar}` : 'none';

        return <div className={`${navbar} ${this.props.theme.sidebar} ui borderless icon menu`} style={{borderBottom: borderColor}}>
            <a className="item" onClick={this.props.onToggleSidebar}>
                <i className="large sidebar icon"></i>
            </a>
        </div>
    }
}
