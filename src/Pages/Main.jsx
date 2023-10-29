import { useContext, useState } from "react";

import AddRandoms from "../Components/AddRandoms/AddRandoms";

import StartGame from "../Components/StartGame/StartGame";
import { MiContexto } from "../Context/Context";


function Main() {


  const {palabras, setPalabras} = useContext(MiContexto)
  const [escritura, setEscritura] = useState("");

  const escribeme = () => {
    if (escritura) {
      setPalabras([...palabras, { palabra: escritura, counter: 1 }]);
      setEscritura("");
    }
  };

  const escribe = (e) => {
    setEscritura(e.target.value);
  };

return ( <>
<header className="App--header">
<h1 className="App--header--titulo">Random Hidden</h1>
<div className="App--header__listaPersonas">
  <AddRandoms palabras={palabras} setPalabras={setPalabras} />
  <div className="App--header__listaPersonas__container">
    <input
      className="App--header__listaPersonas__container--input"
      type="text"
      placeholder="Introduce una palabra"
      value={escritura}  
      onChange={escribe}
      
    />
    <button
      className="App--header__listaPersonas__container--button"
      type="submit"
      onClick={escribeme}
    >
      Add New
    </button>
  </div>
</div>
</header>
<StartGame palabras={palabras}/>
</>)
}

export default Main;