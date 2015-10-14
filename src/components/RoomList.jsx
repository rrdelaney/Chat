import React, { Component } from 'react';
import { roomList } from './RoomList.css';

export default function RoomList({rooms, theme}) {
    return <div className={`${roomList} ${theme.sidebar} ui list`}>
        <h4>Rooms</h4>
        {rooms.map(room => (
            <div className="item" key={room.id}>{room.name}</div>
        ))}
    </div>
}
