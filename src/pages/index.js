import React from 'react'

import { Competitions } from '../components/Competitions';
import { Logo } from '../components/Logo';
import { Motto } from '../components/Motto';
import { Vision } from '../components/Vision';
import { WorkExperience } from '../components/WorkExperience';

import './index.scss';

const styles = {
  spa: 'spa',
}

export default () => (
  <div className={styles.spa}>
    <section>
      <Logo />
      <Motto />
    </section>
    <section id="my-vision">
      <h1>My vision</h1>
      <Vision />
    </section>
    <section id="my-experience">
      <h1>My Experience</h1>
      <WorkExperience />
    </section>
    <section id="competitions">
      <h1>Competitions</h1>
      <Competitions />
    </section>
  </div>
)
