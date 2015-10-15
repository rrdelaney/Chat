import React, { Component } from 'react'
import { loginInput } from './UserPane.css'

export default class UserPane extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUserId = this.handleUserId.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

        this.state = {
            userId: '',
            password: ''
        };
    }

    handleLogin(event) {
        if (event) event.preventDefault();
        this.props.onLogin(this.state.userId, this.state.password);
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleUserId(event) {
        this.setState({
            userId: event.target.value
        });
    }

    render() {
        if (this.props.user.id) {
            return <div>
                <h2 className={`${this.props.theme.sidebar} ui center aligned icon header`}>
                    <i className="user icon"></i>
                    <div className="content">
                        {this.props.user.name}
                    </div>
                </h2>
                <div style={{textAlign:'center'}}>
                    <button className={`${this.props.theme.sidebar} ui right labeled icon button`} onClick={this.props.onLogout}>
                        Sign Out
                        <i className="sign out icon"></i>
                    </button>
                </div>
            </div>
        } else {
            return <form onSubmit={this.handleLogin}>
                <h3>Log In</h3>
                <div className={`${this.props.theme.sidebar} ${loginInput} ui transparent fluid icon input`}>
                    <input tabIndex="1" type="text" placeholder="User ID" value={this.state.userId} onChange={this.handleUserId}/>
                    <button className={`${this.props.theme.sidebar} ui basic icon compact button`}>
                        <i className="sign in icon" onClick={this.handleLogin}></i>
                    </button>
                </div>
                <div className={`${this.props.theme.sidebar} ${loginInput} ui transparent fluid input`}>
                    <input tabIndex="2" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
                </div>
                <input type="submit" style={{display: 'none'}}/>
            </form>
        }

    }
}
