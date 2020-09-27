import React from 'react'

const Project = ({ item, last }) => (
  <div key={item.value.title} className="w-full max-w-full h-full">
    <a href={item.value.link} className="h-full" target="_blank" rel="noreferrer">
      <div className="rounded p-3 shadow-md w-full border-solid border-gray-900 border-2 bg-black h-full hover:border-indigo-600 transition-all duration-100">
        <div className="my-3">
          {/* <img
            className="h-auto rounded-t rounded-l text-center overflow-hidden"
            style={{ maxWidth: '75px' }}
            src={item.value.image.url}
          /> */}
          <h2 className="uppercase tracking-wide text-white font-bold mt-2 text-md">{item.value.title}</h2>
        </div>

        <div>
          <div className="leading-relaxed text-gray-400 text-sm">{item.value.description}</div>
        </div>
      </div>
    </a>
  </div>
)

export default Project
