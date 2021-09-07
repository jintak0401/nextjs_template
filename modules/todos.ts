import {AnyAction} from "redux";

// todos의 action.type
// 실제 문자열 값으로 추런되도록 as const를 붙임
const CHANGE_INPUT: string = 'todos/CHANGE_INPUT' as const;
const INSERT: string = 'todos/INSERT' as const;
const TOGGLE: string = 'todos/TOGGLE' as const;
const REMOVE: string = 'todos/REMOVE' as const;


// todos의 action 정의
// 자세한 내용은 @modules/counter 참고
const changeInput = (input: string): AnyAction => ({
    type: CHANGE_INPUT,
    input
});

let id = 3;

const insert = (text: string): AnyAction => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false,
    }
});

const toggle = (id: number): AnyAction => ({
    type: TOGGLE,
    id
});

const remove = (id: number): AnyAction => ({
    type: REMOVE,
    id
})

// todo리스트의 각 todo들
interface TodoType {
    id: number,
    text: string,
    done: boolean
}

// todos의 상태 정의
interface TodosState {
    input: string,
    todos: Array<TodoType>
}

// 초기상태
const initialState: TodosState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '철권 오메가 찍기',
            done: false,
        },
        {
            id: 2,
            text: '영화 100편 보기',
            done: true
        },
    ]
};

// todos의 reducer
const todos = (state: TodosState = initialState, action: AnyAction): TodosState => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input,
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo),
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                )
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export {changeInput, insert, toggle, remove};
export type {TodoType, TodosState};
export default todos;