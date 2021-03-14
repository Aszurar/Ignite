import { useState } from 'react'

export function Counter(){
    const [counter, setCounter] = useState(0);
    // Definindo uma variável Estado que tem por valor padrão 0
    // Definindo sua função de atualização
    function increment() {
        console.log('Incrementing');
        setCounter(counter + 1); //atualizando o valor de counter 
        //+ 1 unidade toda vez que for clicado no butão de incremento 
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    );
}