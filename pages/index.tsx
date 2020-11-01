import React, { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center h-screen font-sans text-center text-white text-center"
      style={{ backgroundImage: `url('/background.jpg')` }}
    >
      <div>
        <h1 className="text-7xl">Benoit Travers</h1>
        <h2 className="text-2xl font-light">Software developer</h2>
        <div className="flex flex-row flex-no-wrap justify-evenly m-12">
          <a href="https://www.linkedin.com/in/btraversfr/" target="_blank">
            <img className="w-12" src="/linkedin.svg"></img>
          </a>
          <a href="https://github.com/btravers" target="_blank">
            <img className="w-12" src="/github.svg"></img>
          </a>
          <a href="https://twitter.com/Benoit_Travers" target="_blank">
            <img className="w-12" src="/twitter.svg"></img>
          </a>
        </div>
      </div>
    </div>
  )
}
