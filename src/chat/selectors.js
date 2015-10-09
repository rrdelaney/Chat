import { USER, ROOM, MESSAGE } from './actions';

export default function select(state) {
    return {
        users: users(state),
        messages: messages(state),
        rooms: rooms(state)
    };
}

function users(state) {
    return state.entities
                .filter((entity) => entity.type === USER)
                .map((entity, id) => {return { ...entity, id }});
}

function messages(state) {
    return state.entities
                .filter((entity) => entity.type === MESSAGE)
                .map((entity, id) => {return { ...entity, id }});
}

function rooms(state) {
    return state.entities
                .filter((entity) => entity.type === ROOM)
                .map((entity, id) => {return { ...entity, id }});
}
