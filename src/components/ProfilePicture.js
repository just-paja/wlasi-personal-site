import React from 'react';

import { Logo } from './Logo';

import introPhoto from '../../public/honza-intro.jpg';
import './ProfilePicture.scss';

const styles = {
  profilePicture: 'profilePicture',
  profilePictureLogo: 'profilePictureLogo',
};

export function ProfilePicture({ variant }) {
  return (
    <div className={styles.profilePicture}>
      <div className={styles.profilePictureLogo}>
        <Logo variant='inverse' />
      </div>
      <img src={introPhoto} alt='Honza Vlasák' />
    </div>
  );
}
