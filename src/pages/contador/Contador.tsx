import { useState } from "react";

function Contador() {

  const [valor, setValor] = useState(0);

  // Arrow function que altera o valor somando mais um 
  const handleClickSum = () => setValor(valor + 1)

  // Function que altera o valor somando mais um
  // function handleClick() {
  //   setValor(valor + 1);
  // }

  // Function que altera o valor somando mais um
  function handleClickSub() {
    setValor(valor - 1);
  }



  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O valor atual é: {valor}</p>
      <button onClick={handleClickSum}>Adicionar 1</button>
      <button onClick={handleClickSub}>Subtrair 1</button>
    </div>
  )
}

export default Contador