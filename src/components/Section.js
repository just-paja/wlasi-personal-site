import React from 'react';

import { Container } from './Container';

import './Section.scss';

const styles = {
  inverse: 'sectionInverse',
};

export function Section({ children, inverse, ...props }) {
  return (
    <div className={inverse ? styles.inverse : null}>
      <Container component='section' {...props}>
        {children}
      </Container>
    </div>
  )
}
