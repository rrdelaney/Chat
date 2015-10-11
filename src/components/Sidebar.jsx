import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="ui inverted sidebar inline" style={{height:'100%'}}>
                <div className="ui inverted basic segment" style={{height:'100%'}}>
                    <div className="ui icon inverted secondary pointing menu">
                        <a className="active item"><i className="users icon"></i></a>
                        <a className="item"><i className="setting icon"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}
