import React from 'react';

export function CompetitionDetail({ competition }) {
  return (
    <div>
      <h3>{competition.name}</h3>
      <p>
        {competition.result}<br />
        {competition.end}<br />
        Drinks: {competition.drinks.map(drink => drink.name).join(', ')}
      </p>
    </div>
  )
}
