import Markdown from 'react-markdown';
import React from 'react';

export function EmploymentDetail({ employment }) {
  return (
    <div>
      <h3>{employment.name}</h3>
      <p>{employment.location}</p>
      <p>{employment.position.name}</p>
      <p>{employment.start} - {employment.end}</p>
      <Markdown source={employment.position.name} />
    </div>
  )
}
