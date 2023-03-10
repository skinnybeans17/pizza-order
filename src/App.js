import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [peperoni, setPeperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)

  return (
  <div className="App">
    <div className="Order">
      <label>
        <input 
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={peperoni}
          onChange={() => setPeperoni(!peperoni)}
        />
        Peperoni
      </label>
      <label>
        <input
          type="checkbox"
          checked={sausage}
          onChange={() => setSausage(!sausage)}
        />
        Sausage
      </label>
      <label>
        <input
          type="checkbox"
          checked={peppers}
          onChange={() => setPeppers(!peppers)}
        />
        Peppers
      </label>
      <label>
        <input
          type="checkbox"
          checked={onions}
          onChange={() => setOnions(!onions)}
        />
        Onions
      </label>
    </div>

    <div className="display">
      <h1>Your Order</h1>
      <p>{name && <div>{name}</div>}</p>
      <p>---------------------------</p>
      <p>{peperoni && <div>Pepperoni</div>}</p>
      <p>{sausage && <div>Sausage</div>}</p>
      <p>{peppers && <div>Peppers</div>}</p>
      <p>{onions && <div>Onions</div>}</p>
    </div>

    <button type="submit">Submit</button>
  </div>
  );
}
export default App;