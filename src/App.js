import './App.css';
import { useRef } from 'react';
import Timer from './components/Timer';
import { Button } from './components/Button';

function App() {
  const incTimerRef = useRef(null);

  const handleGetFunction = (fn) => {
    incTimerRef.current = fn;
  };

  // Функция для клика по кнопке "+"
  const handlePlusClick = () => {
    if (incTimerRef.current) {
      incTimerRef.current();
    }
  };

  return (
    <div className="App">
      <h1>React Redux Timer</h1>
      
      <Timer getIncrementFunction={handleGetFunction} />
      
      <Button value='+' clicked={handlePlusClick} />
      <Button value='Start' />
      <Button value='Stop' />
      <Button value='Reset' />
      <Button value='-' />
    </div>
  );
}

export default App;
