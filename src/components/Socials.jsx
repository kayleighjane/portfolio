import React from 'react';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';

const Socials = () => <div className="flex justify-end basis-1/2 gap-x-4">
  <span className="icon-light">
    <GithubIcon />
  </span>
  <span className="icon-light">
    <LinkedinIcon />
  </span>
</div>

export default Socials;
