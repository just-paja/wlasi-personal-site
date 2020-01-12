import React from 'react'

import { Intro } from '../components/Intro';

import './index.scss';

const styles = {
  spa: 'spa',
}

export default () => (
  <div className={styles.spa}>
    <Intro />
    <p style={{ textAlign: 'center' }}>
      Website in progress
    </p>
  </div>
)

// <Section id="my-vision">
//   <h1>My vision</h1>
//   <Vision />
// </Section>
// <Section id="my-experience">
//   <h1>My Experience</h1>
//   <WorkExperience />
// </Section>
// <Section id="competitions">
//   <h1>Competitions</h1>
//   <Competitions />
// </Section>
