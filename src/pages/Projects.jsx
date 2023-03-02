import React from 'react';
import Card from '../components/Card';

const Projects = () => {
  return (
    <section className="flex flex-col flex-1 gap-y-8">
      <h2 className="bg-brown-100 text-5xl customxs:text-6xl customsm:text-6.5xl font-semibold md:text-7xl">My projects</h2>
      <p className="text-xl primary font-normal customsm:text-2xl semibold">
        Here are my current projects that are available on Github. 
      </p>
      <Card />
      <Card />
      <Card />
    </section>
  )
};

export default Projects;
