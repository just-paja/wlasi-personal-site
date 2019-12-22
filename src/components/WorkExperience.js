import React from 'react';

import { EmploymentDetail } from './EmploymentDetail';

const employments = [
  {
    name: 'Artisan',
    location: 'Manchester, United Kingdom',
    start: '2015-07',
    end: '2016-03',
    position: {
      name: 'barback, bartender',
      description: `
        This is where it all started, I learned the basics and instantly fell for bartending!
        Artisan’s seen my very first steps behind the bar. At first with stock and ice buckets and in a short while I got an opportunity to step up and learn how to make drinks. After a short but very intensive training program, I started to smash my first drinks. I fell in love with bartending, started buying books and learning on my own. And this passion has stayed with me ever since.
      `,
    }
  },
  {
    name: 'Pen & Pencil',
    location: 'Manchester, United Kingdom',
    start: '2016-04',
    end: '2016-11',
    position: {
      name: 'bar supervisor',
      description: `
        An amazing opportunity to show my passion to learn and teach at the same time.
        About a year into my new career, I got an offer to enter a bar team of a smaller independent restaurant as a bar supervisor. It was a great first management experience, all from handling the money, opening and closing the venue, ordering stock, solving the problems on shifts and teaching new staff members.
      `,
    },
  },
  {
    name: 'Cash Only bar',
    location: 'Prague, Czech Republic',
    start: '2016-12',
    end: '2019-12',
    position: {
      name: 'bartender, bar supervisor',
      description: `
        Constantly improving myself on this amazing journey through competitions, signature cocktails or magazine articles.
        When I left the UK and moved back to Prague, I started mixing drinks in this american styled cocktail bar.
      `,
    },
  },
]

export function WorkExperience() {
  return (
    <div>
      {employments.map(employment => (
        <EmploymentDetail
          key={employment.name}
          employment={employment}
        />
      ))}
    </div>
  )
}
