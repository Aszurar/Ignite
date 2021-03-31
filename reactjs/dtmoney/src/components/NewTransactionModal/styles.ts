import styled from "styled-components";
import { darken, transparentize } from 'polished';
export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        background-color: var(--input-background);
        border-radius: 0.25rem;
        border: 1px solid #D7D7D7;
        padding: 0 1.5rem;
        height: 4rem;
        width: 100%;

        font-size: 1rem;
        font-weight: 400;
        
        & + input {
            margin-top: 1rem;
        }

        &::placeholder {
            color: var(--text-body);
        }
    }



    button[type="submit"] {
        margin-top: 1.5rem;
        font-size: 1rem;

        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        background-color: var(--green);
        border: none;
        border-radius: 0.25rem;
        color: var(--shape);
        font-weight: 600;
        outline: none;
        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9);
        }
    }
`
export const TransactionTypeConainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 0;
    gap: 0.5rem;

`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E40',
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 4rem;
    border: 1.5px solid #d7d7d7;
    border-radius: 0.25rem;

    background-color: ${(props) => props.isActive ? 
    transparentize(0.9, colors[props.activeColor]) 
    : 'transparent'};
    /* Alterando a cor de fundo de acordo com a propriedade isActive */
    /*A função transparentize torna a cor mais transparente de acordo com a porcentagem recebida*/
    /*é diferente da propriedade opacity, pois a opacity afeta todos elementos dentro daquele bloco, enquanto que essa função transparentize
    torna a cor somente daquela propriedade específica mais transparente */
    img {
        height: 20px;
        width: 20px;
    }
    
    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-title);
    }

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.20, '#d7d7d7')}
    }
`