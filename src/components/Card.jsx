import React from 'react';


const Card = () => {

return (
  <div className="flex gap-x-4 rounded-xl border-2 border-custom-light p-4">
    <div className="rounded-lg bg-custom-light"></div>
    <div className="">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Movie search</h3>
      <p className="pt-2 pb-4">... is a React application created as part of a training project with Paul Blackwell, where through paired programming we covered the basics of React and best practices of it using the IMDBAPI. </p>
      <ul className="flex gap-x-2 justify-end">
        <li className="rounded-xl border-2 border-custom-light p-2 py-1">Docs</li>
        <li className="rounded-xl border-2 border-custom-light p-2 py-1">Preview</li>
      </ul>
    </div>
  </div>
)
}

export default Card;
