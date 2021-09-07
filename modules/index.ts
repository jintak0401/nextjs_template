import {combineReducers, createStore} from "redux";
import counter from "./counter";
import todos from "./todos";
import {createWrapper} from "next-redux-wrapper";

const rootReducer = combineReducers({
    counter,
    todos,
});


const store = () => createStore(rootReducer);

const wrapper = createWrapper(store, {
    debug: process.env.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof rootReducer>;
export {counter, todos};
export default wrapper;