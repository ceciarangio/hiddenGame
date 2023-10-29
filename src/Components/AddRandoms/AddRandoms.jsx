import Counter from "../Counter/Counter"
import './AddRandoms.scss'

export default function AddRandoms({palabras, setPalabras}){

    // const handleCounter = (index, newCounterValue) => {
    //     const actualizaPalabras = [...palabras];
    //     actualizaPalabras[index].counter = newCounterValue;

    //     if(newCounterValue <= 0){
    //         actualizaPalabras.splice(index,1);
    //     }
    //     setPalabras(actualizaPalabras);
    // };

    const handleCounter = (index, newCounterValue) => {
        const actualizaPalabras = palabras.map((word, wordIndex) => {
            if (index === wordIndex) {
                return { ...word, counter: newCounterValue };
            }
            return word;
        });

        setPalabras(actualizaPalabras.filter(word => word.counter > 0));
    };


    return (
        <>
            <div className="c-AddRandoms">
                {palabras.map((texto, index) =><div className="c-AddRandoms__container"> <p className="c-AddRandoms__container--p" key={index}> {texto.palabra} </p>
                <Counter counter={texto.counter} counterChange={(newCounterValue) => handleCounter(index, newCounterValue)} index={index}/>
                </div>)}
            </div>
        </>
    )
}

