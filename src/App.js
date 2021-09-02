import {useEffect} from "react";
import {getMovie} from "./service/serviceMovie";




export default function App() {

useEffect(()=>{
  getMovie().then(value => console.log(value.data))
},[])

    return (

        <div>

        </div>

    );
}
