import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@modules";
import {increase, decrease} from "@modules/counter1";
import {NextComponentType} from "next";
import {useCallback} from "react";

const useCounter = (): Array<any> => {
    const {number} = useSelector((state: RootState) => state.counter1);
    const dispatch = useDispatch();
    // 리렌더링 될 때마다 함수를 새로 만들어지지 않게하기 위해, useCallback 사용
    const increment = useCallback(() => dispatch(increase), [dispatch]);
    const decrement = useCallback(() => dispatch(decrease), [dispatch]);

    return [number, increment, decrement];
}

const Counter1: NextComponentType = () => {
    const [number, increment, decrement] = useCounter();
    return (
        <div>
            <h1>Count: <span>{number}</span></h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
}

export default Counter1;
