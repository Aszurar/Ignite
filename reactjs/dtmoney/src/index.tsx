import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createServer, Model } from 'miragejs'

createServer({
  // criando um servidor fictício
  
  // usando o BD do mirageJS para criar uma tabela de transações
  models: {
    transaction: Model,
    // aqui definimos o nome de nossa tabela no BD fictício e a tipagem dele como Model que vem direto do mirageJS
  },


  seeds(server){
  // Carregando dados  padrões no BD, na tabela de transação, para que sempre se tenha os dados abaixo por padrão no BD e ele nunca comece vazio.
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },

        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-03-14 22:00:00'),
        }
      ]
    })
  },

  routes() {


    this.namespace = 'api'
    // para todas as rotas de api  utilizem as respostas abaixo
    this.get('/transactions', () => {
      // em uma chamada do tipo get, retorne essa resposta
      return this.schema.all('transaction')
      // retornando todas instÂncias da tabela de transações.
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      // resgatando os dados do formulário que foi preenchido pelo usuário
      // Temos que converter esses dados que vem do formulário de string para o formato json
      
      return schema.create('transaction', data);
      // salva na tabela de transação os dados inseridos pelo usuário
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);