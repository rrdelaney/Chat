import { USER, ROOM, MESSAGE } from './actions';

export default function select(state) {
    return {
        users: users(state),
        messages: messages(state),
        rooms: rooms(state),
        user: user(state),
        activeTab: activeTab(state),
        theme: theme(state),
        mobile: mobile(state)
    };
}

function users(state) {
    return state.entities
                .map((entity, id) => ({ ...entity, id }))
                .filter(entity => entity.type === USER);

}

function messages(state) {
    return state.entities
                .map((entity, id) => ({ ...entity, id }))
                .filter(entity => entity.type === MESSAGE);
}

function rooms(state) {
    return state.entities
                .map((entity, id) => ({ ...entity, id }))
                .filter(entity => entity.type === ROOM);
}

function user(state) {
    return state.app.userId;
}

function activeTab(state) {
    return state.app.activeTab;
}

function theme(state) {
    return state.app.theme;
}

function mobile(state) {
    return state.app.mobile;
}
