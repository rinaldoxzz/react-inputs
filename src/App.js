import React, {useState, useRef} from 'react';
//Em react, é mais comum utilizar useState para capturar os valores dos inputs
//

function App() {

  const inputRef = useRef(null);
  const [mensagem, setMensagem] = useState('');

  return (
   <div>
    <label>Nome: </label>
      <input style={{marginLeft: '10px', marginRight: '10px' }} 
      type='text'

      ref={inputRef}

      //value={nome}

      //Evento onchange realiza uma ação quando a mudança no campo do input
      //e.target.value faz a mudança do valor do input
      //onChange={e => setNome(e.target.value)}
      //inputRef.current.value retorna o valor atual do ref
      />
    
      <button onClick={() => setMensagem(`Olá, ${inputRef.current.value} !!`)}>Mostrar</button>
      <p>{mensagem}</p>
   </div>
  );
}

export default App;
