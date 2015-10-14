import React, { Component } from 'react'
import { roomList } from './RoomList.css'

export default function RoomList({rooms, theme}) {
    return <div className={`${roomList} ${theme.sidebar} ui list`}>
        <h3>Rooms</h3>
        {rooms.map(room => (
            <div className="item" key={room.id}>{room.name}</div>
        ))}
    </div>
}
