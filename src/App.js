import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 10) {
      amount = 10;
    }
    setText(data.slice(0, amount));
  }
  
  return (
    
    <section className='section-center'>
      <h3>Tired of boring text?</h3>
      <p className={`${count > 10 ? "" : "deactivate" }`} >Sorry, maximum number is 10!</p>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          Paragraphs?
        </label>
        <input type='number' name='number' id='amount' value={count} onChange={(e) => {
          setCount(e.target.value)
        }} />
        <button type='submit' className='btn'>generate</button>
      </form>
      
      {
        text.map((loremText, index) => {
          return (
            <p key={index}> 
              {loremText}
            </p>
          )
        })
      }
    </section>
  )
}

export default App;
