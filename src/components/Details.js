import classnames from 'classnames';
import React, { useState } from 'react';

import './Details.scss';

const styles = {
  content: 'detailsContent',
  contentVisible: 'detailsContentVisible',
}

export function Details({ children, summary }) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <summary onClick={() => setVisible(!visible)}>
        {summary}
      </summary>
      <div
        className={classnames(styles.content, {
          [styles.contentVisible]: visible
        })}
      >
        {children}
      </div>
    </div>
  )
}
