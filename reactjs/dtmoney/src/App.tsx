import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global'
export function App() {
  // Utilizamos o export function nome do componente
  // ao contrário de export default nome do Componente
  // pois quando se utiliza o export default ele exporta
  // o componente de forma que é possível alterar o nome do 
  // componente no arquivo que utilizará o componente já na 
  // declaraão da importação do  componente, já no epxor
  // sem o deafult, natualmente não é possível mudar o nome do componente
  // se o usuário não quiser usando as newname por exemplo.

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); // definindo o Estado do Modal como false por padrão,
  // para que não comece aberto

  // funções que alteram o Estado do Modal para abri-lo ou fecha-lo
  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> 
      {/* levando para o filho a função que abre o Modal */}
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}

export default App;
