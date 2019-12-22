import React from 'react';

export function CompetitionDetail({ competition }) {
  return (
    <div>
      <h3>{competition.name}</h3>
      <p>{competition.result}</p>
      <p>{competition.end}</p>
      {competition.drinks.map(drink => drink.name).join(', ')}
    </div>
  )
}
