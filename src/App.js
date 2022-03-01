import React from "react"
import "./styles.css"
import { Routes, Route, Link } from "react-router-dom";
import About from "./About"
import Posts from "./Posts";


const App = () => {

    return (
        <div>
            <nav>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/about" className="navLink">About</Link>
            </nav>
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );

}

export default App;