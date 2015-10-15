import themes from './themes'

export const USER = 'USER'
export const ROOM = 'ROOM'
export const MESSAGE = 'MESSAGE'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const CREATE_ROOM = 'CREATE_ROOM'
export const CREATE_USER = 'CREATE_USER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const JOIN_ROOM = 'JOIN_ROOM'
export const CHANGE_TAB = 'CHANGE_TAB'
export const CHANGE_THEME = 'CHANGE_THEME'
export const TOGGLE_MOBILE = 'TOGGLE_MOBILE'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export function addMessage(roomId, text, authorId) {
    return {
        type: ADD_MESSAGE,
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

export function logout() {
    return {
        type: LOGOUT
    }
}

export function joinRoom(roomId) {
    return {
        type: JOIN_ROOM,
        roomId
    };
}

export function setActiveTab(tab) {
    return {
        type: CHANGE_TAB,
        tab
    };
}

export function changeTheme(themeName) {
    localStorage.setItem('chat-theme', themeName);

    return {
        type: CHANGE_THEME,
        theme: themes[themeName] || themes.chat
    };
}

export function toggleMobile() {
    return {
        type: TOGGLE_MOBILE
    };
}

export function toggleSidebar() {
    return {
        type: TOGGLE_SIDEBAR
    };
}
