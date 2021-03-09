//Nas versões mais recentes do React não precisamos importa-lo em tudo
//basta adicionarmos uma configuração a mais no babelconfig.
import { render } from 'react-dom';
import { App } from './App';

render(<App />, document.getElementById('root'));


