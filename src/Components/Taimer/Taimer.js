import React from "react";
import { auth } from "../../Fairbase";

export const Taimer = ({ timeObjectiveHours, timeObjectiveMinutes, timeObjectiveSeconds }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [[h, m, s], setTime] = React.useState([timeObjectiveHours, timeObjectiveMinutes, timeObjectiveSeconds]);

  const tick = () => {
    if (paused || over) return;

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(timeObjectiveHours), parseInt(timeObjectiveMinutes), parseInt(timeObjectiveSeconds)]);
    setPaused(false);
    setOver(false);
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p>
          {
            `${h.toString().padStart(2, '0')}:${m
              .toString()
              .padStart(2, '0')}:${s.toString().padStart(2, '0')}`
          }
        </p>
        <div style={{ marginLeft: '10px' }}>{over ? "Time's up!" : ''}</div>
      </div>
      {auth.lastNotifiedUid === 'qH0QyYnT8NO3dOwlWiZPMnEEif32' && (
        <>
          <button style={{ border: 'none', padding: '5px', borderRadius: '5px', marginRight: '10px' }} onClick={() => setPaused(!paused)}>
            {paused ? 'Resume' : 'Pause'}
          </button>
          <button style={{ border: 'none', padding: '5px', borderRadius: '5px' }} onClick={() => reset()}>Restart</button>
        </>
      )}

    </div>
  );
};