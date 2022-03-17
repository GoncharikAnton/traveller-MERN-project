import './App.css';
import 'materialize-css';
import {Navbar} from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App container">
            <Navbar/>
            <h1>Hello Traveller!</h1>
        </div>
    );
}

export default App;
