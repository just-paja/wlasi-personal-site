import classnames from 'classnames';
import React from 'react';

import './Container.scss';

const styles = {
  container: 'container',
};

export function Container({
  children,
  className,
  component: Component = 'div',
}) {
  return (
    <Component className={classnames(styles.container, className)}>
      {children}
    </Component>
  )
}
