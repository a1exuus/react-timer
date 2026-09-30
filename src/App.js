import './App.css';
import { useRef } from 'react';
import Timer from './components/Timer';
import { Button } from './components/Button';

function App() {
  const incTimerRef = useRef(null);
  const decTimerRef = useRef(null);
  const startTimerRef = useRef(null);
  const stopTimerRef = useRef(null);
  const resetTimerRef = useRef(null);

  const handleGetFunction = (fn) => {
    incTimerRef.current = fn;
  };
  const handleGetDecFunction = (fn) => {
    decTimerRef.current = fn;
  };
  const handleGetStartFunction = (fn) => {
    startTimerRef.current = fn;
  };
  const handleGetStopFunction = (fn) => {
    stopTimerRef.current = fn;
  };
  const handleGetResetFunction = (fn) => {
    resetTimerRef.current = fn;
  }


  const handlePlusClick = () => {
    if (incTimerRef.current) {
      incTimerRef.current();
    }
  };

  const handleMinusClick = () => {
      if (decTimerRef.current) {
          decTimerRef.current();
      }
  };

  const handleStartClick = () => {
      if (startTimerRef.current) {
          startTimerRef.current();
      }
  };

  const handleStopClick = () => {
      if (stopTimerRef.current) {
          stopTimerRef.current();
      }
  };

  const handleResetClick = () => {
      if (resetTimerRef.current) {
          resetTimerRef.current();
      }
  };

  return (
    <div className="App">
      <h1>React Redux Timer</h1>
      
      <Timer 
        getIncrementFunction={handleGetFunction}
        getDecrementFunction={handleGetDecFunction}
        getStartFunction={handleGetStartFunction}
        getStopFunction={handleGetStopFunction}
        getResetFunction={handleGetResetFunction}
      />
      
      <Button value='+' clicked={handlePlusClick} />
      <Button value='Start' clicked={handleStartClick} />
      <Button value='Stop' clicked={handleStopClick} />
      <Button value='Reset' clicked={handleResetClick} />
      <Button value='-' clicked={handleMinusClick} />
    </div>
  );
}

export default App;
