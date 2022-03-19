import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./Routes/routes";
import {Header} from "./Layouts/Header/Header";



import './App.css';
import 'materialize-css';
import {HomePage} from "./Pages/HomePage";

function App() {
    const prop = {
        title: 'Welcome to Traveller!',
        description: 'We are glad to see you on our web-site! \n' +
            'Here you can share your opinion about all your travels all over the world! And ofcourse you can take some;)\n' +
            'Enjoy!',
        rating: null,
        author: null,
        img: null
    }
    return (
        <BrowserRouter>
            <div className="App">
                <HomePage props={prop}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
