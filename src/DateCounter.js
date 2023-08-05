// import React, { useReducer, useState } from 'react'

// function reducer(state,action){
//     // return state+action
//     // if(action.type==="inc") return state+1
//     // if(action.type==="dec") return state-1
//     // if(action.type==="setCount") return action.payload
//     switch(action.type){
//         case 'dec':
//             return {...state,count:state.count-state.step}

//         case 'inc':
//             return {...state,count:state.count+state.step}
//         case "setCount":
//             return {...state,count:action.payload}
//         case "setStep":
//             return {...state,step:action.payload}

//         case "reset":
//             // return {count:0,step:1}
//             return initialState
//         default:
//             throw new Error("Unknown action")
//     }
// }

// const DateCounter = () => {
//     // const [count, setCount] = useState(0)

//     // const [count,dispatch]=useReducer(reducer,0)

//     // const [step, setStep] = useState(1)
//     const initialState={
//         count:0,
//         step:1
//     }

//     const [state,dispatch]=useReducer(reducer,initialState)
//     const {count,step}=state

//     const date = new Date("august 01 2023")
//     date.setDate(date.getDate() + count)


//     const inc = () => {
//         dispatch({type:"dec"})
//         // setCount((count) => count + step)
//     }

//     const dec = () => {
//         dispatch({type:"inc"})
//         // setCount((count) => count - step)
//     }

//     const definecount = (e) => {
//         dispatch({type:"setCount",payload:Number(e.target.value)})
//         // setCount(Number(e.target.value))
//     }
//     const defineStep = (e) => {
//         dispatch({type:'setStep',payload:Number(e.target.value)})
//         // setStep(Number(e.target.value))
//     }

//     const reset = function () {
//         dispatch({type:"reset"})
//         // setCount(0);
//         // setStep(1);
//     };

//     return (
//         <div className='counter'>

//             <div>
//                 <input
//                     type="range"
//                     min="0"
//                     max="10"
//                     value={step}
//                     onChange={defineStep}
//                 />
//                 <span>{step}</span>
//             </div>


//             <div>
//                 <button onClick={dec}>-</button>
//                 <input value={count} onChange={definecount} />
//                 <button onClick={inc}>+</button>
//             </div>
//             <p>{date.toDateString()}</p>
//             <div>
//                 <button onClick={reset}>Reset</button>
//             </div>
//         </div>
//     )
// }

// export default DateCounter