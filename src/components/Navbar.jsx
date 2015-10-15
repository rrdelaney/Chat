import React, { Component } from 'react'
import { navbar } from './Navbar.css'

export default function Navbar(props) {
    let borderColor = props.theme.sidebar.indexOf('inverted') === -1 ? `1px solid ${props.theme.sidebar}` : 'none';

    return <div className={`${navbar} ${props.theme.sidebar} ui borderless icon menu`} style={{borderBottom: borderColor}}>
        <a className="item" onClick={props.onToggleSidebar}>
            {props.isLoggedIn ? <i className="large sidebar icon"></i> :
                (props.sidebarVisible ? <i className="large angle left icon"></i> : 'Log In')
            }
        </a>
    </div>
}
