import {useEffect} from "react";
import {getMovie} from "./service/serviceMovie";
import {useDispatch, useSelector} from "react-redux";




export default function App() {
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let {movies} = state


    useEffect(()=>{
        getMovie().then(value => {
            dispatch({type:'getMovie',payload:value.data.results})
        })
},[])

    // useEffect(()=>{
    //     getMovie().then(value => console.log(value.data.results))
    // },[])

    return (

        <div>
            {
              movies.map(value => value && <div>{value.id}</div>)
            }
        </div>

    );
}
