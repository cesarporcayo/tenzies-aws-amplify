import './App.css';
import React, {useState} from "react"
import Home from "./Pages/Home"
import Game from "./Pages/Game"

function App() {
  const [page, setPage] = useState("PAGE--HOME")
    
    switch (page) {
        case "PAGE--HOME":
            return <Home setPage={setPage}/>
        case "PAGE--PARTY":
            return <Game mode="PARTY" setPage={setPage}/>
        case "PAGE--WORK":
            return <Game mode="WORK" setPage={setPage}/>
        case "PAGE--WIN":
            return <Win setPage={setPage}/>
        
    }
}

export default App;
