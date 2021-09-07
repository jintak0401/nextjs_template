import {TodoType} from "@modules/todos";
import {Dispatch} from "redux";

interface TodoItemProps {
    todo: TodoType,
    onToggle: (id: number) => Dispatch,
    onRemove: (id: number) => Dispatch,
}

const TodoItem = ({todo, onToggle, onRemove}: TodoItemProps) => {
    return (
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    );
}

interface TodoProps {
    input: string,
    todos: Array<TodoType>,
    onChangeInput: (input: string) => Dispatch,
    onInsert: (input: string) => Dispatch,
    onToggle: (id: number) => Dispatch,
    onRemove: (id: number) => Dispatch,
}

const Todos = ({input, todos, onChangeInput, onInsert, onToggle, onRemove}: TodoProps) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 새로고침 하지 않기 위해 필요
        onInsert(input);
        onChangeInput('');
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
}

export default Todos;