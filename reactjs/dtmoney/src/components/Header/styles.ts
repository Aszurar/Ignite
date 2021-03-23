import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--blue);

`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button { 
        background-color: var(--blue-light);
        color: #FFF;
        font-weight: 600;
        border: none;
        border-radius: 0.25rem;
        padding: 0.75rem 2rem;
        
        transform: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`