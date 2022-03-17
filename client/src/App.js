import './App.css';
import 'materialize-css';
import {Navbar} from "./components/Navbar/Navbar";
import {useCallback, useState} from "react";
import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";

function App() {
    const [tours, setTours] = useState(null)
// TODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const data = async () => {
        try {
            const response = await fetch('/api/v1/tours', {method: 'GET'})
            // console.log(response)
            const data = await response.json()
            console.log(data.data)
            setTours({...data.data});
            console.log(tours.tours)
        }catch (e){
            console.log(e)}
    }




    return (
        <div className="App container">
            <Navbar/>
            <h1>Hello Traveller!</h1>
            <button onClick={data}>DATA</button>
            {/*{tours && tours.tours.map((tour, index) => {*/}
            {/*    return <li key={index}>{tour}</li>*/}
            {/*})}*/}
        </div>
    );
}

export default App;
