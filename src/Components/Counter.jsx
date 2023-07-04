import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction, incrementByValueAction } from '../redux/actions/CounterActions';

const Counter = () => {

    const { count } = useSelector(state => state.counter);
    // const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        incrementAction(dispatch)
    }

    const handleDecrement = () => {
        decrementAction(dispatch)
    }

    const handleIncrementByValue = (value) => {
        incrementByValueAction(value, dispatch)
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