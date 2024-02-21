import logo from './logo.svg';
import './App.css';
import BullsCowsGame from './BullsCowsGame';
import NumberGuessingGame from './NumberGuessingGame';
import TriviaGame from './TriviaGame';
import SequenceGame from './ArithmeticSequenceGame';
import ArithmeticSequenceGame from './ArithmeticSequenceGame';
import BasicMenu from './Menu';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <BasicMenu/>
    <Routes>
      <Route path='/TriviaGame' element={<TriviaGame/>}/>
      <Route path='/ArithmeticSequenceGame' element={<ArithmeticSequenceGame/>}/>
      <Route path='/NumberGuessingGame' element={<NumberGuessingGame/>}/>
    </Routes>
    </div>
  );
}

export default App;
