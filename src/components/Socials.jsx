import React from 'react';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';

const Socials = () => <div className="flex justify-end basis-1/2 gap-x-4 relative z-20">
  <span>
    <a href="https://github.com/kayleighjane/portfolio" className="icon-light"><GithubIcon /></a>
  </span>
  <span>
    <a href="https://uk.linkedin.com/in/kayleigh-regan-869279134" className="icon-light">
    <LinkedinIcon />
    </a>
  </span>
</div>

export default Socials;
