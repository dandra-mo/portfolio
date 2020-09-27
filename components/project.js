import React from "react";

const Project = ({ item }) => (
     <div key={item.value.title} className="w-full max-w-full flex px-12 mb-8">
        <div class="border-r border-b border-l border-t border-indigo-400 bg-black rounded px-5 py-2 leading-normal shadow-2xl w-full">
          <a href={item.value.link} className="hover:text-opacity-25">
              <div className="my-8">
                 <img className="h-auto flex-none rounded-t rounded-l text-center overflow-hidden" style={{maxWidth: "75px"}} src={item.value.image.url} />
                <h2 className="uppercase tracking-wide text-md text-indigo-600 font-bold mt-4">{item.value.title}</h2>
              </div>
              </a>

              <div>
                <div className="text-md text-gray-600 leading-relaxed">{item.value.description}
              </div>
        </div>
      </div>
    </div>
)

export default Project;