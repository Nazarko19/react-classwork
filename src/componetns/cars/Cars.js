import {useEffect, useState} from "react";
import {getCars} from "../../servis/cars.servis";
import Car from "../car/Car";

export default function Cars({url}) {

  let [cars,setCars] = useState([])

  useEffect(()=>{
    getCars().then(value => setCars([...value]))
  },[])

  switch (url) {
    case 'event':
      return cars.filter(value => value.model.length % 2 === 0 ).map(value => <div>{value.model}</div>)
    case 'odd':
      return cars.filter(value => value.model.length % 2 !== 0 ).map(value => <div>{value.model}</div>)
    default:
      return '';
  }
}