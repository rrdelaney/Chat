import React, { Component } from 'react';
import { roomList } from './RoomList.css';

export default function RoomList({rooms}) {
    return <div className={[roomList, 'ui', 'list'].join(' ')}>
        {rooms.map(room => (
            <div className="item" key={room.id}>{room.name}</div>
        ))}
    </div>
}
