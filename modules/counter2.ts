import {Action, AnyAction} from "redux";

// action.type이 string으로 추론되지 않고, 실제 문자열 값으로 추론 되도록 as const를 붙임
const INCREASE = 'counter2/INCREASE' as const;
const DECREASE = 'counter2/DECREASE' as const;

const increase = (): AnyAction => ({
    type: INCREASE
});
const decrease = (): AnyAction => ({
    type: DECREASE
});

type CounterState2 = {
    number: number
};

const initialState = {
    number: 100,
};

const counter2 = (state = initialState, action: AnyAction): CounterState2 => {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export {increase, decrease};
export default counter2;
