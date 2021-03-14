interface RepositoryItemProps {
    // Quando formos fazer uma tipagem de uma propriedade de um componente, 
    // a convessão é repetir o nome do componente
    // junto com o nome da propriedade
    //  Nesse caso, em que pegamos o repositório de uma api, que tem várias informações
    //  só precisamos tipar as informações que utilizamos
    repository: {
        name: string,
        description: string,
        html_url: string,
    }
    
}

export function RepositoryItem(props: RepositoryItemProps){
    return (
        <li>
            <h3>{props.repository.name}</h3>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url} target="_blank" >Acesse o repositório</a>
        </li>
    );
}