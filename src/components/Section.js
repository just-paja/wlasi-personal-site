import classnames from 'classnames';
import React from 'react';

import { Container } from './Container';

import './Section.scss';

const styles = {
  inverse: 'sectionInverse',
  navSection: 'navSection',
  section: 'section',
};

function ucfirst(s) {
  return s.charAt(0).toUpperCase() + s.substr(1);
}

function kebabToHuman(str) {
  return str.split('-').map(ucfirst).join(' ');
}

export function Section({ children, inverse, next, prev, ...props }) {
  return (
    <div className={classnames(styles.navSection, { [styles.inverse]: inverse })}>
      {prev && (
        <nav>
          <a href={`#${prev}`}>
            ▲<br />
            {kebabToHuman(prev)}
          </a>
        </nav>
      )}
      <Container component='section' {...props} className={classnames(styles.section, props.className)}>
        {children}
        {next && (
          <nav>
            <a href={`#${next}`}>
              {kebabToHuman(next)}<br />
              ▼
            </a>
          </nav>
        )}
      </Container>
    </div>
  )
}
