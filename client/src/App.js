import React { useState, useEffect  } from "react";
import './App.css';

function App() {

    // creating a state to get whatever user types in input box
    const [movieName, setMovieName] = useState("");
    const [movieReview, setMovieReview] = useState("");
    
    return (
    <div className="App">
        <h1>CRUD Application</h1>
            <div className="form">
                <label>Movie Name</label>
                <input type="text" name="movieName" onChange={(e) => {
                    setMovieName(e.target.value)
                }} />
                <label>Movie Review</label>
                <input type="text" name="movieReview" onChange={(e) => {
                    setMovieReview(e.target.value)
                }} />

                <button>Submit</button>
            </div>
    </div>
  );
}

export default App;
