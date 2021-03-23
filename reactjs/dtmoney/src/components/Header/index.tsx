import logoIMG from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps { // interface para receber a propriedade que contém a função que abre o Modal
    onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal } : HeaderProps) {
 // recebendo a função que contém a função que abre o Modal
    return (
        <>
        <Container>
            <Content>
                <img src={logoIMG} alt="Logo do site"/>
                <button 
                type="button"
                onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
        </>
    );
}