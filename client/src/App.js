import './App.css';
import 'materialize-css';
// import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Header} from "./Layouts/Header/Header";

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
        <div className="App">
            <Header props={prop}/>
        </div>
    );
}

export default App;
