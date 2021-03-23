import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createServer } from 'miragejs'

createServer({
  // criando um servidor fictício
  routes() {
    this.namespace = 'api'
    // para todas as rotas de api  utilizem as respostas abaixo
    this.get('/transactions', () => {
      // em uma chamada do tipo get, retorne essa resposta
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);