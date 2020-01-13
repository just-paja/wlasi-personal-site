import React, { useEffect, useRef, useState } from 'react';

import { LogoLoader } from './LogoLoader';
import { Motto } from './Motto';
import { ProfilePicture } from './ProfilePicture';
import { Section } from './Section';

import './Intro.scss';

const styles = {
  heading: 'introHeading',
  section: 'introSection',
};

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export function Intro({ variant }) {
  const [progress, setProgress] = useState(0);

  useInterval(function() {
    setProgress(Math.min(1, progress + 0.1));
  }, progress < 1 ? 100 : null);

  return (
    <Section inverse>
      <h1 className={styles.heading}>Honza Vlasák</h1>
      <LogoLoader progress={progress}>
        <ProfilePicture />
        <Motto />
      </LogoLoader>
    </Section>
  );
}
