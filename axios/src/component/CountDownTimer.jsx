import { useState, useEffect, useRef } from "react";

function CountDownTimer() {
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });
  const [countdown, setCountDown] = useState({ hour: 0, minute: 0, second: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime((prev) => ({
      ...prev,
      [name]: Math.max(0, parseInt(value) || 0),
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCountDown(time);
    setIsRunning(false); // Stop running when new time is set
    clearInterval(timerRef.current);
  };

  const handleStartPause = () => {
    if (isRunning) {
      // Pause the timer
      clearInterval(timerRef.current);
    } else {
      // Start the timer
      timerRef.current = setInterval(() => {
        setCountDown((prev) => {
          const totalSeconds =
            prev.hour * 3600 + prev.minute * 60 + prev.second - 1;

          if (totalSeconds <= 0) {
            clearInterval(timerRef.current);
            return { hour: 0, minute: 0, second: 0 };
          }

          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;

          return { hour: hours, minute: minutes, second: seconds };
        });
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setCountDown(time);
    setIsRunning(false);
  };

  useEffect(() => {
    // Clean up the interval when the component unmounts
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-4">CountDown Timer</h1>

      <form className="mb-4">
        <input
          type="number"
          placeholder="HH"
          onChange={handleChange}
          name="hour"
          value={time.hour}
          className="border p-2 mx-2 w-16 text-center"
        />
        <input
          type="number"
          placeholder="MIN"
          onChange={handleChange}
          name="minute"
          value={time.minute}
          className="border p-2 mx-2 w-16 text-center"
        />
        <input
          type="number"
          placeholder="SEC"
          onChange={handleChange}
          name="second"
          value={time.second}
          className="border p-2 mx-2 w-16 text-center"
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          SET
        </button>
      </form>

      <div className="text-4xl font-mono">
        {String(countdown.hour).padStart(2, "0")}:
        {String(countdown.minute).padStart(2, "0")}:
        {String(countdown.second).padStart(2, "0")}
      </div>

      <div className="mt-4">
        <button
          onClick={handleStartPause}
          className="bg-green-500 text-white px-4 py-2 mx-2 rounded"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 mx-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CountDownTimer;
