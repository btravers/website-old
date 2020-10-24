import React, { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center h-screen font-sans text-center text-white text-center"
      style={{ backgroundImage: 'url(' + `${require('./background.jpg')}` + ')' }}
    >
      <div>
        <h1 className="text-6xl">Benoit Travers</h1>
        <div className="text-xl font-light">Software developer</div>
      </div>
    </div>
  )
}
