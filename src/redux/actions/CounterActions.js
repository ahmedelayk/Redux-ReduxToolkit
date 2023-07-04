import { DECREMENT, INCBYVALUE, INCREMENT } from "./types"

export const incrementAction = async (dispatch) => {
    return dispatch({ type: INCREMENT })
}

export const decrementAction = (dispatch) => {
    return dispatch({ type: DECREMENT })
}

export const incrementByValueAction = (value, dispatch) => {
    return dispatch({ type: INCBYVALUE, payload: value })
}