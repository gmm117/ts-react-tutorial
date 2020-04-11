import React, { useReducer } from 'react';

type Action = { type : 'INCREATE'} | { type : 'DECREASE'};

function reducer(state : number, action : Action): number {
    switch(action.type) {
        case "INCREATE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error('Unhandled action type');
    }
}

function ReducerCounter() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch( { type : 'INCREATE'});
    const onDecrease = () => dispatch( { type : 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default ReducerCounter;