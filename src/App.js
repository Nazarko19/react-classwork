import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route


} from "react-router-dom";
import Cars from "./componetns/cars/Cars";


export default function App() {
    return (
        <Router>
        <div>
            <Link to={'/'}>no</Link>
            <Link to={'/cars1'}>Парні автомобілі</Link>
            <Link to={'/cars2'}>Непарні автомобілі</Link>

            <Route path={'/cars1'} render={()=><Cars url="event"/>}/>
            <Route path={'/cars2'} render={()=><Cars url="odd"/>}/>
        </div>
      </Router>
    );
}
