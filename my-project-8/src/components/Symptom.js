import './Symptom.css';
import React from 'react';

function Symptom({symptom, duration, severity, date, time, notes}) {
  return (
    <section className="symptom">
        <h4><strong>Symptom: </strong>{symptom}</h4>
        <h5><strong>Duration: </strong>{duration}</h5>
        <h5><strong>Severity: </strong>{severity}</h5>
        <h5><strong>Date: </strong>{date}</h5>
        <h5><strong>Time: </strong>{time}</h5>
        <h5><strong>Notes: </strong>{notes}</h5>
    </section>
  );
};

export default Symptom;