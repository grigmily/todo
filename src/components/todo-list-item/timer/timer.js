import React, {useState, useEffect, useCallback} from "react";
import "./timer.css";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function Timer() {
  const [day, setDay] = useState(0);
  const [hou, setHou] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [time, setTime] = useState("");
  const [saved, setSaved] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [play, setPlay] = useState(false);

  const doTime = useCallback(
    startTime => {
      console.log("usedCallBack!");
      const timeCounter = Date.now() - startTime + saved;
      const seconds = Math.floor((timeCounter / SECOND) % 60);
      if (seconds.toString().length === 1) {
        setSec("0" + seconds);
      } else setSec(seconds);

      const minutes = Math.floor((timeCounter / MINUTE) % 60);
      if (minutes.toString().length === 1 && min !== 0) {
        setMin("0" + minutes);
      } else setMin(minutes);
      setDay(Math.floor(timeCounter / DAY));
      setHou(Math.floor((timeCounter / HOUR) % 24));

      if (day) setTime(`${day}:${hou}:${min}:${sec}`);
      else if (hou) setTime(`${hou}:${min}:${sec}`);
      else if (min) setTime(`${min}:${sec}`);
      else if (sec) setTime(`:${sec}`);
      else setTime("");
    },
    [day, hou, min, sec, saved]
  );

  function setStart() {
    setStartTime(Date.now());
  }

  function togglePlay() {
    setPlay(!play);
    console.log(play);
    if (!play) setStart();
    else setSaved(Date.now() - startTime);
  }

  function resetTimer() {
    setDay(0);
    setHou(0);
    setMin(0);
    setSec("00");
    setTime(":00");
    setSaved(0);
    setStartTime(Date.now());
  }
  function stopTimer() {
    setPlay(false);
    setTime("");
    setSaved(Date.now() - startTime);
  }

  useEffect(() => {
    console.log("usedEffect!");
    if (play) {
      var intervalId = setInterval(() => doTime(startTime), 1000);
    } else clearInterval(intervalId);
    return () => clearInterval(intervalId);
  }, [play, startTime, doTime]);

  return (
    <div className="timer">
      <button className="icon icon-play" onClick={togglePlay}>
        {!play ? "▶" : "⏸"}
      </button>
      <button className="icon icon-reset" onClick={resetTimer}></button>
      <span className="timer-time">{time}</span>
      <button className="icon icon-stop" onClick={stopTimer}></button>
    </div>
  );
}
