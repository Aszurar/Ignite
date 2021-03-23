import Modal from 'react-modal';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal( {isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
        isOpen={isOpen} // propriedade que definirá se o modal esta aberto ou fechado
        onRequestClose={onRequestClose} // propriedade que recebe a função que fecha o modal
        >
            <h2>Cadastrar Informação</h2>
        </Modal>
    ); 
}