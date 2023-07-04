import { DECREMENT, INCBYVALUE, INCREMENT } from "./types"

export const incrementAction = async (dispatch) => {
    return dispatch({ type: INCREMENT })
}

// export const fetchAllUsers = ()=> async(dispatch) => {
//     dispatch
// }

export const decrementAction = async (dispatch) => {
    return dispatch({ type: DECREMENT })
}

export const incrementByValueAction = async (value, dispatch) => {
    return dispatch({ type: INCBYVALUE, payload: value })
}