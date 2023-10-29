
// import { useContext, useEffect, useState } from "react";
// import { MiContexto } from "../Context/Context";
// import '../Pages/Game.scss';
// import 'animate.css';

// export default function Game() {
//     const { palabras } = useContext(MiContexto);
//     const [palabrasFiltradas, setPalabrasFiltradas] = useState([]);
//     const [indiceActual, setIndiceActual] = useState(0);
//     const [palabrasMostradas, setPalabrasMostradas] = useState(0);

//     useEffect(() => {
//         const generarPalabrasFiltradas = () => {
//             const filteredWords = palabras.reduce((acc, palabra) => {
//                 for (let i = 0; i < palabra.counter; i++) {
//                     acc.push(palabra.palabra);
//                 }
//                 return acc;
//             }, []);

//             setPalabrasFiltradas(filteredWords);
//         };

//         generarPalabrasFiltradas();
//     }, [palabras]);

    

//     const mostrarPalabraAleatoria = () => {
//         if (palabrasMostradas < palabrasFiltradas.length) {
//             const indiceAleatorio = Math.floor(Math.random() * palabrasFiltradas.length);
//             setIndiceActual(indiceAleatorio);
//             setPalabrasMostradas(palabrasMostradas + 1);
//         }
//     };

//     return (
//         <>
//             <div className="c-Game__container">
//                 {palabrasMostradas < palabrasFiltradas.length && (
//                     <p className="c-Game__container--p">{palabrasFiltradas[indiceActual]}</p>
//                 )}
//                 {palabrasMostradas < palabrasFiltradas.length && (
//                     <button className="c-Game__container--button" onClick={mostrarPalabraAleatoria}>Next word!</button>
//                 )}
//             </div>
//         </>
//     );
// }
import { useContext, useEffect, useState } from "react";
import { MiContexto } from "../Context/Context";
import '../Pages/Game.scss';
import 'animate.css';

export default function Game() {
    const { palabras } = useContext(MiContexto);
    const [palabrasFiltradas, setPalabrasFiltradas] = useState([]);
    const [indiceActual, setIndiceActual] = useState(0);
    const [showingPlaceholder, setShowingPlaceholder] = useState(true);
    const [nextWordClicked, setNextWordClicked] = useState(false);
    const [shuffledIndices, setShuffledIndices] = useState([]);

    useEffect(() => {
        const generarPalabrasFiltradas = () => {
            const filteredWords = palabras.reduce((acc, palabra) => {
                for (let i = 0; i < palabra.counter; i++) {
                    acc.push(palabra.palabra);
                }
                return acc;
            }, []);

            setPalabrasFiltradas(filteredWords);
            setShuffledIndices(shuffleArrayIndices(filteredWords));
        };

        const shuffleArrayIndices = (arr) => {
            const indices = arr.map((_, index) => index);
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
            return indices;
        };

        generarPalabrasFiltradas();
    }, [palabras]);

    const mostrarPalabraAleatoria = () => {
        if (nextWordClicked && indiceActual < palabrasFiltradas.length) {
            const nextIndex = indiceActual + 1;
            setIndiceActual(nextIndex);
            setNextWordClicked(false);
            setShowingPlaceholder(true);
        } else {
            setShowingPlaceholder(false);
            setNextWordClicked(true);
        }
    };

    return (
        <>
            <div className="c-Game__container">
                {indiceActual < palabrasFiltradas.length ? (
                    <div>
                        {showingPlaceholder ? (
                            <img
                                src="https://cdn.pixabay.com/photo/2016/12/22/04/39/question-mark-1924516_1280.png"
                                alt="placeholder"
                                className="c-Game__container--image"
                            />
                        ) : (
                            <p className="c-Game__container--p">
                                {palabrasFiltradas[shuffledIndices[indiceActual]]}
                            </p>
                        )}
                    </div>
                ) : (
                    <h2 className="c-Game__container--h2">GAME OVER!</h2>
                )}
                {indiceActual < palabrasFiltradas.length && (
                    <button className="c-Game__container--button" onClick={mostrarPalabraAleatoria}>
                        Next word!
                    </button>
                )}
            </div>
        </>
    );
}