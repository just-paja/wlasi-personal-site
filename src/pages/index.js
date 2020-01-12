import React from 'react'

import { Intro } from '../components/Intro';
import { Vision } from '../components/Vision';
import { WorkExperience } from '../components/WorkExperience';

import './index.scss';

const styles = {
  spa: 'spa',
}

export default () => (
  <div className={styles.spa}>
    <Intro />
    <Vision />
    <WorkExperience />
  </div>
)

// <Section id="competitions">
//   <h1>Competitions</h1>
//   <Competitions />
// </Section>
