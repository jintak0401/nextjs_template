import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@modules";
import {increase, decrease} from "@modules/counter2";
import {NextComponentType} from "next";
import {useCallback} from "react";
import useActions from "@lib/useActions";

const useCounter = (): Array<any> => {
    const {number} = useSelector(({counter2}: RootState) => counter2);
    // useActions를 이용하여 actions 배열을 넘겨주면 dispatch 함수를 리턴해줌
    const [increment, decrement] = useActions([increase, decrease], []);

    return [number, increment, decrement];
}

const Counter2: NextComponentType = () => {
    const [number, increment, decrement] = useCounter();
    return (
        <div>
            <h1>Count: <span>{number}</span></h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
}

export default Counter2;
