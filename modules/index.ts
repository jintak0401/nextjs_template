import {combineReducers, createStore, Store} from "redux";
import counter1 from "./counter1";
import counter2 from "./counter2";
import {createWrapper} from "next-redux-wrapper";

const rootReducer = combineReducers({
    counter1,
    counter2
});


const store = () => createStore(rootReducer);

const wrapper = createWrapper(store,{
    debug: process.env.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof rootReducer>;
export {counter1, counter2};
export default wrapper;