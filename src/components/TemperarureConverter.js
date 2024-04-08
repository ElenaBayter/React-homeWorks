import { useState } from "react";

function TemperatureConverter() {
  const [celcium, setCelcium] = useState("");
  const [fareng, setFareng] = useState("");

  const convert = () => {
    if (celcium) {
      setFareng((celcium * 9) / 5 + 32);
      setTimeout(() => {
        setFareng(0);
        setCelcium(0);
      }, 2500);
    }
    if (fareng) {
      setCelcium((5 / 9) * (fareng - 32));
      setTimeout(() => {
        setCelcium(0);
        setFareng(0);
      }, 2500);
    }
  };

  return (
    <>
      <label htmlFor="celcium">Input temperature in Celcium</label>
      <input
        id="celcium"
        type="text"
        onChange={(e) => setCelcium(e.target.value)}
        value={celcium}
      />
      <br />
      <label htmlFor="fareng">Input temperature in Farengheit</label>
      <input
        id="fareng"
        type="text"
        onChange={(e) => setFareng(e.target.value)}
        value={fareng}
      />
      <br />
      <button onClick={convert}>Convert</button>
    </>
  );
}

export default TemperatureConverter;
