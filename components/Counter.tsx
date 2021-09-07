import {Dispatch} from "redux";

interface counterProps {
    count: number,
    onIncrease: () => Dispatch,
    onDecrease: () => Dispatch,
    onReset: () => Dispatch,
}

const Counter = ({count, onIncrease, onDecrease, onReset}: counterProps) => {
    return (
        <div>
            <h1>Count: <span>{count}</span></h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onReset}>reset</button>
        </div>
    );
}

export default Counter;