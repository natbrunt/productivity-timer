import React from 'react';
import {useState ,useEffect, useRef} from 'react';
import Clock from './clock'
import Controls from './controls'
const Timer = () => {
  
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(10);
  const [active, setActive] = useState(false)

  // Using refs to hold the current state values
  const secondsRef = useRef(seconds);
  const minutesRef = useRef(minutes);
  const activeRef = useRef(active);

  const setOn = () => setActive(true);
  const setOff = () => setActive(false);

  useEffect(() => {
      secondsRef.current = seconds;
      minutesRef.current = minutes;
      activeRef.current = active;
  }, [seconds, minutes, active]);

  useEffect(() => {
      // Implementing the setInterval method
      const interval = setInterval(() => {
        if (secondsRef.current == 0 && minutesRef.current == 0){
            setActive(false)
        }
        else if (activeRef.current) {
            setSeconds(prevSeconds => {
                const newSeconds = prevSeconds > 0 ? prevSeconds - 1 : 59;
                setMinutes(prevMinutes => Math.max(prevMinutes - (prevSeconds > 0 ? 0 : 1), 0)); // Prevent negative minutes
                return newSeconds;
            });
        }
      }, 1000);

      // Clearing the interval
      return () => clearInterval(interval);
  }, []); // Dependency array is empty to run the effect only once

  return (
  <div className='custom-timer'>

    <Clock minutes={minutes} seconds={seconds}/>
    <Controls setOn={setOn} setOff={setOff} active={active}/>
  </div>
  );
};

export default Timer;