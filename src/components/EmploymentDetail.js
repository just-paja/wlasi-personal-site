import moment from 'moment';
import Markdown from 'react-markdown';
import React from 'react';

import { GlassIcon } from './GlassIcon';
import { Details } from './Details';

function formatDate(date) {
  return moment(date).format('MMMM YYYY');
}

export function EmploymentDetail({ employment }) {
  return (
    <Details
      summary={(
        <>
          <h3>
            <GlassIcon variant='inverse' />
            {' '}
            <span>{employment.name}</span>
          </h3>
          <p>
            {employment.location}<br />
            {employment.position.name}<br />
            {formatDate(employment.start)} - {formatDate(employment.end)}
          </p>
        </>
      )}
    >
      <Markdown source={employment.position.description} />
    </Details>
  )
}
