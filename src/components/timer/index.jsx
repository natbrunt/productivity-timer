import React from 'react';
import {useState ,useEffect, useRef} from 'react';
import Clock from './clock'
import Controls from './controls'
const Timer = () => {
  
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(true)

  // Using refs to hold the current state values
  const secondsRef = useRef(seconds);
  const minutesRef = useRef(minutes);

  useEffect(() => {
      secondsRef.current = seconds;
      minutesRef.current = minutes;
  }, [seconds, minutes]);

  useEffect(() => {
      // Implementing the setInterval method
      const interval = setInterval(() => {
          if (secondsRef.current > 0) {
              setSeconds(prevSeconds => prevSeconds - 1);
          } else {
              setSeconds(59);
              setMinutes(prevMinutes => prevMinutes - 1);
          }
      }, 1000);

      // Clearing the interval
      return () => clearInterval(interval);
  }, []); // Dependency array is empty to run the effect only once

  return (
  <div className='custom-timer'>

    <Clock minutes={minutes} seconds={seconds}/>
    <Controls setMinutes={setMinutes} setSeconds={setSeconds}/>
  </div>
  );
};

export default Timer;