import React from 'react'

import { Achievements } from '../components/Achievements';
import { Intro } from '../components/Intro';
import { Vision } from '../components/Vision';
import { WorkExperience } from '../components/WorkExperience';

import './index.scss';

const styles = {
  spa: 'spa',
}

export default () => (
  <div className={styles.spa}>
    <Intro
      id='introduction'
      next='my-vision'
    />
    <Vision
      id='my-vision'
      next='work-experience'
      prev='introduction'
    />
    <WorkExperience
      id='work-experience'
      next='achievements'
      prev='my-vision'
    />
    <Achievements
      id='achievements'
      prev='work-experience'
    />
  </div>
)
