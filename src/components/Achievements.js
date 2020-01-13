import React from 'react';

import { CompetitionDetail } from './CompetitionDetail';
import { Section } from './Section';

const competitions = [
  {
    name: 'World Class Czech Republic',
    result: 'Made it to top 5',
    start: '2019-02',
    end: '2019-04',
    drinks: [
      {
        name: 'Madame V.',
        slug: 'madame-v',
      },
      {
        name: 'Connection',
        slug: 'connection',
      },
    ],
  },
  {
    name: 'Flor de Caña Mixtronomy CZ',
    result: 'Made it to top 4',
    start: '2018',
    end: '2018',
    drinks: [
      {
        name: 'Herbologist’s Gimlet',
        slug: 'herbologists-gimlet',
      },
    ],
  },
  {
    name: 'Bulleit Tandem Competition CZ',
    result: 'Winner!',
    start: '2018',
    end: '2018',
    drinks: [
      {
        name: '2-4-2',
        slug: '2-4-2',
      },
    ],
  },
  {
    name: 'The "Drunken" Botanist Gin&Tonic CZ',
    result: 'Made it to top 4',
    start: '2017',
    end: '2017',
    drinks: [
      {
        name: 'Islay Shore',
        slug: 'islay-shore',
      },
    ],
  },
]

export function Achievements() {
  return (
    <Section id="achievements">
      <h1>Achievements</h1>
      {competitions.map(competition => (
        <CompetitionDetail
          key={competition.name}
          competition={competition}
        />
      ))}
    </Section>
  )
}
