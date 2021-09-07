import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@modules";
// import useActions from "@lib/useActions";
import {CounterState, decrease, increase, reset} from "@modules/counter";
import {Counter} from "@components";


// useActions 이용
// const useCounter = (): Array<any> => {
//     const {count}: { count: number } = useSelector(({counter}: RootState) => counter);
//     const [onIncrease, onDecrease, onReset] = useActions([increase, decrease, reset], []);
//
//     return [count, onIncrease, onDecrease];
// }


// useCallback 이용
const useCounter = (): Array<any> => {
    const {count}: { count: number }
        = useSelector(({counter}: RootState): CounterState => counter);
    // const {count}: { count: number } = useSelector((state: RootState):CounterState => state.counter); 위와 동일한 코드
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    const onReset = useCallback(() => dispatch(reset()), [dispatch]);

    return [count, onIncrease, onDecrease, onReset];
}

const CounterContainer = () => {
    const [count, onIncrease, onDecrease, onReset] = useCounter();

    return (
        <div>
            <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} onReset={onReset}/>
        </div>
    )
}

export default React.memo(CounterContainer);