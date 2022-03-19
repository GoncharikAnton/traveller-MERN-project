import './App.css';
import 'materialize-css';
// import Navbar from "./Components/Navbar/Navbar";
import {Navbar} from "./Components/Navbar/Navbar";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

function App() {

    return (
        <div className="App">
        <Navbar/>
        </div>
    );
}

export default App;
