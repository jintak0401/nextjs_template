import {AnyAction} from "redux";

// action.type이 string으로 추론되지 않고, 실제 문자열 값으로 추론 되도록 as const를 붙임
const INCREASE = 'counter2/INCREASE' as const;
const DECREASE = 'counter2/DECREASE' as const;
const RESET = 'counter2/RESET' as const;

/*
 useActions를 이용하기 위해서는 각 action들의 타입이 ()=>AnyAction 이어야 함
 onIncrease = useCallback(() => dispatch(increase()), [dispatch]); 와 같이 사용
 [onIncrease, onDecrease, onReset] = useActions([increase, decrease, reset],[]); 처럼 사용
 */

/*
 const increase = {type: INCREASE};
 const decrease = {type: DECREASE};
 const reset = {type: RESET};

 onIncrease = useCallback(() => dispatch(increase), [dispatch]);

 처럼 사용
 단 useActions는 사용할 수 없음
 */

const increase = (): AnyAction => ({
    type: INCREASE
});
const decrease = (): AnyAction => ({
    type: DECREASE
});
const reset = (): AnyAction => ({
    type: RESET
});


// counter의 상태 정의
interface CounterState {
    count: number
}

// 초기상태
const initialState: CounterState = {
    count: 0,
};

// counter의 reducer
const counter = (state: CounterState = initialState, action: AnyAction): CounterState => {
    switch (action.type) {
        case INCREASE:
            return {
                count: state.count + 1
            };
        case DECREASE:
            return {
                count: state.count - 1
            };
        case RESET:
            return {
                count: 0
            };
        default:
            return state;
    }
}

export {increase, decrease, reset};

// interface을 export 할 때에는 export type 으로 해야함
export type {CounterState}

export default counter;
