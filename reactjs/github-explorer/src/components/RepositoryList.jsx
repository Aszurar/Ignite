const repositoryName = "Sorvetinho"
//a maneira de trazer variáveis do javascript para o 
//html dentro de um Componente react é colocar as variáveis entre {}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    
                    <p>description</p>
                    <a href="#">
                        Acesse o repositório
                    </a>
                </li>

                <li>
                    <strong>unform</strong>
                    
                    <p>description</p>
                    <a href="#">
                        Acesse o repositório
                    </a>
                </li>

                <li>
                    <strong>unform</strong>
                    
                    <p>description</p>
                    <a href="#">
                        Acesse o repositório
                    </a>
                </li>
            </ul>
        </section>
    );
}