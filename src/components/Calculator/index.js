import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { subtract, sum } from '../../store/Calculator/Calculator.actions';

export const Calculator = () => {
  const dispatch = useDispatch();
  const result = useSelector(state => state.calculator)
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);

  const handleChangeA = (event) => {
    setInputA(event.target.value)
  }


  return (
    <>
      <input 
        type="text" 
        placeholder="a" 
        value={inputA}
        onChange={(event) => setInputA(Number(event.target.value))}
      />
      <input 
        type="text" 
        placeholder="b" 
        value={inputB}
        onChange={(event) => setInputB(Number(event.target.value))}
      />

      <button onClick={() => dispatch(sum(inputA, inputB))} >Somar</button>
      <button onClick={() => dispatch(subtract(inputA, inputB))} >Subtrair</button>

      <div>{ result }</div>
    </>
  )
}
