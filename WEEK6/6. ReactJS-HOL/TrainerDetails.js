import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from '../TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find(t => t.trainerId.toString() === id);

  return (
    <div>
      <h2>Trainer Details</h2>
      {trainer ? (
        <ul>
          <li>Name: {trainer.name}</li>
          <li>Email: {trainer.email}</li>
          <li>Phone: {trainer.phone}</li>
          <li>Technology: {trainer.technology}</li>
          <li>Skills: {trainer.skills}</li>
        </ul>
      ) : (
        <p>Trainer not found</p>
      )}
    </div>
  );
}

export default TrainerDetails;
