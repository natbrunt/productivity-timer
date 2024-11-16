import React from 'react';
import {useState} from 'react';
import Clock from './clock'
import Controls from './controls'
const Timer = () => {
  
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
  <div>
    <Clock minutes={minutes} seconds={seconds}/>
    <Controls setMinutes={setMinutes} setSeconds={setSeconds}/>
  </div>
  );
};

export default Timer;