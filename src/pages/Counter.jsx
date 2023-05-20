import React, { useCallback, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const  [historique, setHistorique] = useState([]);

    const pairOrNot = counter % 2 === 0 
        ?   <span>Le compteur est pair</span>
        :   <span>Le compteur est impair</span>
    ;

    const generateHisto = useCallback(newCount => {
        setHistorique([...historique, counter]);
        setCounter(newCount);
    }, [counter, historique]);

    return (
        <div className='container mt-3 d-flex flex-column justify-content-center align-items-center'>
            <p>{counter}: {pairOrNot}</p>
            <div>
                <button onClick={() => generateHisto(counter + 1)} className='btn btn-primary'>+</button>
                <button onClick={() => generateHisto(counter - 1)} className='btn btn-danger'>-</button>
            </div>
            <ul>
                {historique.map((text, key) => <li key={key}>Valeur {key} : {text}</li>)}
            </ul>
        </div> 
    );
};

export default Counter;