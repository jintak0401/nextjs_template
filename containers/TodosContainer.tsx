import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@modules";
import {changeInput, insert, toggle, remove, TodoType, TodosState} from "@modules/todos";
import Todos from "@components/Todos";
import useActions from "@lib/useActions";

const useTodos = (): Array<any> => {
    const {input, todos}: { input: string, todos: Array<TodoType> }
        = useSelector(({todos}: RootState): TodosState => ({
        input: todos.input,
        todos: todos.todos
    }));

    // 함수가 많아질수록 가독성을 위해 useActions를 사용권장
    const [onChangeInput, onInsert, onToggle, onRemove]
        = useActions([changeInput, insert, toggle, remove], []);

    return [input, todos, onChangeInput, onInsert, onToggle, onRemove];
}

const TodosContainer = () => {
    const [input, todos, onChangeInput, onInsert, onToggle, onRemove] = useTodos();
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
}

export default React.memo(TodosContainer);