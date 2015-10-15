import React, { Component } from 'react'

export default class UserPane extends Component {
    render() {
        if (this.props.user.id) {
            return <h2 className={`${this.props.theme.sidebar} ui center aligned icon header`}>
                <i className="user icon"></i>
                {this.props.user.name}
            </h2>
        } else {
            return <div>
                <h3>Log In</h3>
                <div className={`${this.props.theme.sidebar} ui transparent input`}>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className={`${this.props.theme.sidebar} ui transparent input`}>
                    <input type="password" placeholder="password"/>
                </div>
            </div>
        }

    }
}
