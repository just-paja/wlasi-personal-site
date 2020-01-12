import React from 'react';

import { Container } from './Container';

export function Section({ children, ...props }) {
  return (
    <Container component='section' {...props}>
      {children}
    </Container>
  )
}
