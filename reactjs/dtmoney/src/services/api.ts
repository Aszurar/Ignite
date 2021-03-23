import axios from 'axios';

export const api = axios.create({
    // criando uma instância do axios para definir informações
    // padrão para todas requisições que iremos fazer em nossa api
    baseURL: 'http://localhost:3000/api',
});