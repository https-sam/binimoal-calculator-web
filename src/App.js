import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import { Binomial_Sigma } from './components/Calculate';
import { useState } from 'react';
import Answer from './components/DisplayAns';

function App() {
  const [data, setData] = useState('');
  const [first, setFirst] = useState(true);

  const dataPass = newData => {
    setFirst(false);
    setData(newData);
  };
  return (
    <div>
      <Input onSubmitData={dataPass} />
      {!first ? <Answer 
        x = {data.x}
        y = {data.y}
        p = {data.p} 
      /> : <p></p>}
    </div>
  );
}

export default App;
