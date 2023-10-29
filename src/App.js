import "./App.scss";
import { Route, Routes, BrowserRouter as Router}  from "react-router-dom";
import Main from "./Pages/Main";
import Game from "./Pages/Game";
import { useState } from "react";
import { MiContexto } from "./Context/Context";


function App() {

  const [palabras, setPalabras] = useState([]);

  return (
    <>
    <MiContexto.Provider value={{palabras, setPalabras}}>
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Main/>}/>
          <Route path="/game" element={<Game/>} />
        </Routes>
      </Router>
    </div>
</MiContexto.Provider>
    </>
  );
}

export default App;

