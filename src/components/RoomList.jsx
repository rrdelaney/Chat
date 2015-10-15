import React, { Component } from 'react'

export default class RoomList extends Component {
    constructor(props) {
        super(props);
        this.handleRoomChange = this.handleRoomChange.bind(this);

        this.state = {
            newRoomName: ''
        };
    }

    handleRoomChange(event) {
        this.setState({
            newRoomName: event.target.value
        });
    }

    render() {
        let joinRoom = (roomId) => () => this.props.onJoinRoom(roomId)
        let handleInput = (event) => this.setState({
            value: event.value
        });

        return <div className={`${this.props.theme.sidebar} ui link list`}>
            <h3>Rooms</h3>
            {this.props.rooms.map(room => (
                <a
                    className={`${room.id === this.props.currentRoom ? 'active' : ''} item`}
                    key={room.id}
                    onClick={joinRoom(room.id)}>
                    {room.name}
                </a>
            ))}
            <div className="item">
                <div className={`${this.props.theme.sidebar} ui transparent icon input`}>
                    <input type="text" placeholder="New Room Name" value={this.state.newRoomName} onChange={this.handleRoomChange}/>
                    <i className="plus icon"></i>
                </div>
            </div>
        </div>
    }
}
