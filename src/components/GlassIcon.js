import React from 'react';

import './GlassIcon.scss'

const styles = {
  icon: 'svgIcon',
};

const colors = {
  background: '#f6ead0',
  primary: '#614229',
  secondary: '#d6a444',
};

export function GlassIcon({ className, variant }) {
  const shapeStyle = {
    fill: variant === 'inverse' ? colors.background : colors.primary,
    fillOpacity: '1',
    fillRule: 'nonzero',
    stroke: 'none',
  };

  return (
    <svg
      className={styles.icon}
      id="svg844"
      version="1.1"
      viewBox="0 0 8.2 7.9"
     >
      <g
        id="layer1"
        transform="translate(-96.241325,-113.18433)"
      >
        <path
          id="path42"
          style={shapeStyle}
          d="m 103.78146,114.50959 c 0.0568,-0.0519 0.0759,-0.1337 0.0476,-0.20567 -0.0282,-0.0723 -0.0974,-0.11959 -0.17462,-0.11959 h -6.225474 c -0.07761,0 -0.147109,0.0473 -0.174978,0.11959 -0.02787,0.072 -0.0088,0.15381 0.04798,0.20567 l 3.052232,2.80493 v 3.3962 l -1.731432,0.66287 c -0.02787,0.0109 -0.04445,0.0402 -0.03916,0.0695 0.0053,0.0296 0.0314,0.0512 0.06174,0.0512 h 3.792712 c 0.03,0 0.0557,-0.0215 0.0614,-0.0512 0.006,-0.0293 -0.0109,-0.0586 -0.0392,-0.0695 l -1.73108,-0.66287 v -3.3962 z"
        />
      </g>
    </svg>
  );
}
