import { combineReducers } from "redux";


function todosReducers(state = [], action) {
    return ['aprender redux']
}

function textReducer(state = '', action) {

}

export default combineReducers({
    todos: todosReducers,
    text: textReducer,
});
