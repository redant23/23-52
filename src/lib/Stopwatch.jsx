import React, { useState, useEffect } from 'react';

function CountdownTimer({ time, currentTime }) {

  const [newTime, setNewTime] = useState(time);
  let timeInterval = null;

  const formattedTime = (value) => {

    let timeLeft = {};

    if (value > 0) {
      timeLeft = {
        hours: Math.floor((value / (60 * 60)) % 24),
        minutes: Math.floor((value / 60) % 60),
        seconds: Math.floor(value % 60)
      };
    } else {
      timeLeft = {
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return timeLeft;
  };

  const startCount = () => setTimeout(() => {
    setNewTime(newTime - 1);
    currentTime(formattedTime(newTime));
  }, 1000);

  useEffect(() => {
    startCount();
  }, [newTime]);

  useEffect(() => {

    timeInterval = startCount();

    return () => {
      clearTimeout(timeInterval);
    };

  }, []);

  return (

    <div>
      <span>{`${formattedTime(newTime).minutes}'${ formattedTime(newTime).seconds < 10 ? '0' + formattedTime(newTime).seconds: formattedTime(newTime).seconds}"`}</span>
    </div>
  );
}

export default CountdownTimer;