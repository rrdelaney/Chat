export const USER = 'USER';
export const ROOM = 'ROOM';
export const MESSAGE = 'MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CREATE_ROOM = 'CREATE_ROOM';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const JOIN_ROOM = 'JOIN_ROOM';

export function sendMessage(roomId, text, authorId) {
    return {
        type: SEND_MESSAGE,
        roomId,
        text,
        authorId
    };
}

export function createRoom(roomName) {
    return {
        type: CREATE_ROOM,
        roomName
    };
}

export function createMember(name) {
    return {
        type: CREATE_USER,
        memberName
    };
}

export function login(userId, password) {
    return {
        type: LOGIN,
        userId,
        password
    }
}

export function logout(userId) {
    return {
        type: LOGOUT,
        userId
    }
}

export function joinRoom(roomId) {
    return {
        type: JOIN_ROOM,
        roomId
    };
}
