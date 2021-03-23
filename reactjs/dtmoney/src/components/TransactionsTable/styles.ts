import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        // tirar as bordas das laterais dos elementos de cada coluna(td) 
        // e deixar somente a borda em horizontal

        th { 
            font-weight: 400;
            color: var(--text-body);
            text-align: left;
            padding: 1rem 2rem;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background-color: var(--shape);
            color: var(--text-body);  
            
            &:first-child{
                color: var(--text-title);
                border-radius: 0.25rem 0 0 0.25rem;
            }         
            &:last-child{
                border-radius: 0 0.25rem 0.25rem 0; 
            }
            &.deposit {
                color: var(--green);
            }
            &.withdraw {
                color: var(--red)
            }
        }
    }
`