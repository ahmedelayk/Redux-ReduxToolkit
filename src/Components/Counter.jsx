import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from '../redux/counterSlicer';
// import { decrementAction, incrementAction, incrementByValueAction } from '../redux/actions/CounterActions';

const Counter = () => {

    const { count } = useSelector(state => state.counter);
    // const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
        // incrementAction(dispatch)
    }
    
    const handleDecrement = () => {
        dispatch(decrement())
        // decrementAction(dispatch)
    }
    
    const handleIncrementByValue = (value) => {
        dispatch(incrementByValue(value))
        // incrementByValueAction(value, dispatch)
    }

    return (
        <>
            <h1>Hello Ya ayook</h1>
            <div>
                <h1>{ count }</h1>
                <button onClick={ handleIncrement }>Increment</button>
                <button onClick={ handleDecrement }>Decrement</button>
                <button onClick={ () => handleIncrementByValue(7) }>Increment by 7</button>
            </div>
        </>
    )
}

export default Counter