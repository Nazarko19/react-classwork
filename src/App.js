import {useReducer} from "react";

const reducer = (state={a:0,b:0,c:0},action) => {
    if (action.obj ==='1'&& action.diya ==="+"){
        return {...state,a:state.a++}
    } else if (action.obj ==='1' && action.diya ==="-"){
        return {...state,a:state.a--}
    }else if (action.obj ==='2'&& action.diya ==="+"){
        return {...state,b:state.b++}
    }else if (action.obj ==='2'&& action.diya ==='-'){
        return {...state,b:state.b--}
    }else if (action.obj === '3'&& action.diya === '+'){
        return {...state,c:state.c++}
    }else if (action.obj === '3'&& action.diya === '-'){
        return {...state,c:state.c--}
    }

}


export default function App() {

    let [state,dispatch] = useReducer(reducer,{a:0,b:0,c:0})
    let {a, b, c} = state


    return (

        <div>
            <h1>state1 - {a}</h1>
            <button onClick={()=> dispatch({obj: '1',diya:'+'})}>збільшити</button>
            <button onClick={()=> dispatch({obj: '1',diya:'-'})}>зменшити</button>

            <h1>state2 - {b} </h1>
            <button onClick={()=> dispatch({obj: '2',diya:'+'})}>збільшити</button>
            <button onClick={()=> dispatch({obj: '2',diya:'-'})}>зменшити</button>

            <h1>state3 - {c} </h1>
            <button onClick={()=> dispatch({obj: '3',diya:'+'})}>збільшити</button>
            <button onClick={()=> dispatch({obj: '3',diya:'-'})}>зменшити</button>

        </div>

    );
}
