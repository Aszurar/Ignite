import { useState, useEffect } from 'react'
import { RepositoryItem }  from './RepositoryItem'
import '../styles/repositories.scss'
//a maneira de trazer variáveis do javascript para o 
//html dentro de um Componente react é colocar as variáveis entre {}
interface Repository {
    // definindo a tipagem para cada repositório
    name: string,
    description: string,
    html_url: string

}

export function RepositoryList(){
    const [ repositories, setRepositories ] = useState<Repository[]>([])//definindo a tipagem de cada elemento da lista de repositórios
    useEffect(() => {
        //função que acessa recursos e pedidos de uma api de 
        //forma assíncrona e fácil por meio da rede
        //retornando uma promessa de executar outra função
        fetch('https://api.github.com/users/Aszurar/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
        // .then(data => console.log(data))
        //  Quando houver uma resposta, a converta para o formato json
        //  Quando a resposta terminar de ser convertida teremos os dados dos repositórios
        //  imprima-os no console ou, como ta na aplicação, atualize a variável
        //  Estado com todos os dados de nossos repositórios
    }, []);
    return (
        <section className="repository-list">
            <h1>Lista de repositórios de Aszurar</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    );
}