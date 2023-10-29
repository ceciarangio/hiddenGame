import { useState } from "react";
import './Counter.scss';



export default function Counter({counter, counterChange, index}){
    const [count, setCount] = useState(counter);

    const suma = function(){
        const sumame = count + 1;
        setCount(sumame);
        counterChange(sumame, index);
    }

    const resta = function(){
        const restame = count - 1;
        setCount(restame);
        counterChange(restame, index);
    }

    const elimina = function(){
      counterChange(0)
    }

    return <div className="c-Counter__container">
        <button className="c-Counter__container--button" onClick={resta} disabled={count === 1}> {"<"} </button>
        <p className="c-AddRandoms--p__count"> {counter > 0 ? counter : ""} </p>
        <button className="c-Counter__container--button" onClick={suma}> {">"} </button>
        <button className="c-Counter__container--button" onClick={elimina}> {"x"} </button>
    </div>
}