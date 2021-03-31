import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E40;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;
        
        --input-background: #E7E9EE;
        --background: #F0F2F5;
        --shape: #FFFFFF;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;

    }

    html {
        // Telas com o máximo de 1080px de largura usem a definição abaixo
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        // Telas com o máximo de 720px de largura usem a definição abaixo
        @media (max-width: 720px) {
            font-size: 87.5%; // 14 px
        }
    }

    body { 
        background-color: var(--background);
        -webkit-font-smoothing: antialiased; //melhora a visualização da fonte
    }

    body, input, button, textArea {
        // por padrão o input, button e textArea não herdam a fonte do body, por isso forçamos aqui
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

/* Estilização do Modal de forma global, pois geralmente todos os modais
de uma página seguem a mesma estilização */
    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed; // elemento sempre fixo na tela, o scroll não será habilitado
        // e habilita as propriedades top, left, right e bottom.
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        // estratégia de alinhar o conteúdo, o único elemento do overlay ao centro da tela
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        // ocupe no máximo 676px mas se não der, então ocupe 100% da tela
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
        
    }

    .react-modal-close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 0;
        border: none;
        background-color: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }



`