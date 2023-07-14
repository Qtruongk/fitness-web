import React, { useState } from 'react';
import './BMIForm.css';

const BMIForm = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [healthStatus, setHealthStatus] = useState('');

  const calculateBMI = (event) => {
    event.preventDefault();

    const bmi = weight / ((height / 100) ** 2);
    setBmiResult(bmi.toFixed(1));

    const bmiRanges = [
      { range: [0, 18.4], status: 'Gầy' },
      { range: [18.5, 24.9], status: 'Bình thường' },
      { range: [25, 29.9], status: 'Hơi thừa cân' },
      { range: [30, 34.9], status: 'Béo phì độ I' },
      { range: [35, 39.9], status: 'Béo phì độ II' },
      { range: [40, Infinity], status: 'Béo phì độ III' },
    ];

    const matchedRange = bmiRanges.find((range) => bmi >= range.range[0] && bmi <= range.range[1]);
    if (matchedRange) {
      setHealthStatus(matchedRange.status);
    } else {
      setHealthStatus('');
    }
  };

  return (
    <div className="bmi-container">
      <h2 className="bmi-title">Tính chỉ số BMI</h2>
      <form onSubmit={calculateBMI}>
        <div className="bmi-input">
          <label>Cân nặng (kg):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </div>
        <div className="bmi-input">
          <label>Chiều cao (cm):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
        </div>
        <button type="submit" className="bmi-button">
          Tính toán
        </button>
      </form>
      {bmiResult && (
        <div className="bmi-result">
          <p>Chỉ số BMI của bạn: {bmiResult}</p>
          <p>Tình trạng sức khỏe: {healthStatus}</p>
        </div>
      )}
    </div>
  );
};

export default BMIForm;
