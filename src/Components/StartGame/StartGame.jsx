import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../StartGame/StartGame.scss';

export default function StartGame({palabras}){
    const navegar = useNavigate();

    const[mensaje, setMensaje] = useState("")

    const comenzar = () => {
        console.log(palabras);
        if (palabras.length < 2) {
            console.log("Introduce más campos");
            setMensaje("Add more words")
        }else if (palabras.length >= 2){
            setMensaje("");
            navegar('/game')
        }
    }


    return <>
    <div className="c-StartGame__container">
        <button className="c-StartGame__container--button" onClick={comenzar}>Start Game!</button>
        <p className="c-StartGame__container--p">{mensaje}</p>
        </div>
        </>
    
}

