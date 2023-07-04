import { DECREMENT, INCBYVALUE, INCREMENT } from "../actions/types";

const CounterReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case INCBYVALUE:
            return { ...state, count: state.count + action.payload}
        default:
            return state;
    }

}

export default CounterReducer;