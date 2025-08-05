import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Alice";
  const school = "ABC High School";
  const total = 480;
  const goal = 600;
  const average = (total / goal) * 100;

  return (
    <div className="score-card">
      <h2>{name}</h2>
      <p>School: {school}</p>
      <p>Total Score: {total}</p>
      <p>Goal: {goal}</p>
      <p>Average Score: {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
