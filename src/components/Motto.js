import classnames from 'classnames';
import React from 'react';

import { Logo } from './Logo';

import './Motto.scss';

const styles = {
  bubble: 'mottoBubble',
  bubbleSmall: 'mottoBubbleSmall',
  header: 'mottoHeader',
};

export function Motto() {
  return (
    <header className={styles.header}>
      <div className={classnames(styles.bubble, styles.bubbleSmall)}><Logo /></div>
      <p className={styles.bubble}>Spreading joy through cocktails around the world.</p>
      <p className={classnames(styles.bubble, styles.bubbleSmall)}>Travel. Drinks. Joy.</p>
    </header>
  )
}
