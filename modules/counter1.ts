import {AnyAction} from "redux";

// action.type이 string으로 추론되지 않고, 실제 문자열 값으로 추론 되도록 as const를 붙임
const INCREASE = 'counter1/INCREASE' as const;
const DECREASE = 'counter1/DECREASE' as const;

const increase:Object = {type: INCREASE};
const decrease:Object = {type: DECREASE};

type CounterState1 = {
    number: number
};

const initialState = {
    number: 0,
};

const counter1 = (state = initialState, action: AnyAction):CounterState1 => {
   switch (action.type){
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
export default counter1;
