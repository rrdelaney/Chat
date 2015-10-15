import { combineReducers } from 'redux'
import { List, Set } from 'immutable'
import { MESSAGE, ROOM, USER, ADD_MESSAGE, CREATE_ROOM, CREATE_USER, LOGIN, LOGOUT, JOIN_ROOM, CHANGE_TAB, CHANGE_THEME, TOGGLE_MOBILE, TOGGLE_SIDEBAR } from './actions'
import { login, logout } from './login'
import dataset from '../data'
import themes from './themes'

let homeroom = {
    name: 'Homeroom',
    type: ROOM,
};

let initialEntities = (function getInitialEntities(dataset) {
    let messageOwnership = [];
    dataset.data.forEach(({user, message}) => {
        messageOwnership[message.id] = user.id
    });

    return List(dataset.includes)
            .sortBy(entity => entity.id)
            .map(entity => {
                switch (entity.type) {
                    case 'message':
                        return {
                            roomId: 0,
                            authorId: messageOwnership[entity.id],
                            text: entity.text,
                            type: MESSAGE
                        };
                    case "user":
                        return {
                            name: entity.name,
                            type: USER
                        };
                    default:
                        return undefined;
                }
            })
            .unshift(homeroom)
})(dataset);

let initialState = {
    id: undefined,
    activeTab: 'rooms',
    roomId: 0,
    theme: themes[localStorage.getItem('chat-theme') || 'chat'],
    mobile: document.body.clientWidth < 500,
    showSidebar: document.body.clientWidth >= 500
};

function entities(state = List(initialEntities), action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return state.push({
                roomId: action.roomId,
                authorId: action.authorId,
                text: action.text,
                type: MESSAGE
            });
        case CREATE_ROOM:
            return state.push({
                name: action.name,
                members: Set(),
                type: ROOM
            });
        case CREATE_USER:
            return state.push({
                name: action.name,
                type: USER
            });
        default:
            return state;
    }
}

function app(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            if (login(action.userId, action.password)) {
                return {
                    ...initialState,
                    id: action.userId
                };
            } else {
                return initialState;
            }
        case LOGOUT:
            if (logout()) {
                return initialState;
            } else {
                return state;
            }
        case JOIN_ROOM:
            return {
                ...state,
                roomId: action.roomId,
            };
        case CHANGE_TAB:
            return {
                ...state,
                activeTab: action.tab
            };
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.theme
            };
        case TOGGLE_MOBILE:
            return {
                ...state,
                mobile: !state.mobile
            };
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                showSidebar: !state.showSidebar
            };
        default:
            return state;
    }
}

export default combineReducers({
    entities,
    app
});
