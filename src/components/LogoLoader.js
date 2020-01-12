import classnames from 'classnames';
import React from 'react';

import { Logo } from './Logo';

import './LogoLoader.scss';

const styles = {
  container: 'logoContainer',
  content: 'logoLoaderContent',
  loader: 'logoLoader',
  loaderColor: 'logoLoaderColor',
  loaderColorContainer: 'logoLoaderColorContainer',
};

export function LogoLoader({ children, progress }) {
  const top = 100 - progress * 100;
  return (
    <div className={styles.loader}>
      <div className={styles.container}>
        <Logo variant='inverse' />
        <div
          className={styles.loaderColorContainer}
          style={{ top: `${top}%` }}
        >
          <div className={classnames(styles.loaderColor)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
