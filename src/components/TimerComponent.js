import { useState, useRef } from 'react';
import { AlarmClockCheck, ChevronLeft, MoveLeft, Pause, Play, RefreshCw, RotateCcw } from 'lucide-react';

export default function TimerComponent() {
  const [time, setTime] = useState(0); 
  const [isActive, setIsActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); 
  const intervalRef = useRef(null); 

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsActive(false);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="timer-container flex flex-row">

      {isCollapsed && <button className="flex flex-row items-center" onClick={() => {toggleCollapse();isActive ? stopTimer() : startTimer();}}>
        <AlarmClockCheck size={20} strokeWidth={2.25} />
      </button>}

      {!isCollapsed && (
        <div className="timer-controls flex flex-row items-center">

          <div onClick={toggleCollapse} className="text-center flex items-center">
            <ChevronLeft size={20} className='items-center'/>
          </div>
          <div className="flex flex-row items-center">

            <button onClick={isActive ? stopTimer : startTimer}>
              {isActive ? (
                <Pause size={20} strokeWidth={2.25} />
              ) : (
                <Play size={20} strokeWidth={2.25} />
              )}
            </button>

            <div className="flex flex-row text-center items-center ml-2">
              {formatTime(time)}
            </div>

            <button onClick={resetTimer} className="ml-2">
              <RefreshCw size={20} />
            </button>
          </div>

          
        </div>
      )}
    </div>
  );
}
