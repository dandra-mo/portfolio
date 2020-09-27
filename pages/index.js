import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getStaticContent, EditButton } from "@tipe/next";
import Project from "../components/project";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


export default function Home({documents, editUrl}) {
  const home = documents[0].fields
  return (
    <div className="pb-12 bg-black"> 
     <div className="flex items-center h-screen shadow-2xl border-b-2 border-white">
      <div className="bg-black w-full h-screen border-b-2 border-white">
        <div className="lg:mx-20 md:mx-12 sm:mx-8">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold mt-16 text-indigo-600">{home.title}</h1>

                      {/* <!-- bio --> */}
          <div
            className="description w-full mt-2 text-gray-600 lg:text-lg md:text-sm sm:text-sm"
          >
            {home.description}
          </div>


            {/* <!-- links --> */}
      <div className="mt-4 flex justify-center">
        <div className="px-2">
          <a className="text-blue-500 hover:text-blue-800" href="https://www.linkedin.com/in/d-andra-moss-phd-she-her-hers-7547161b4/"><AiFillLinkedin /></a>
          </div>  
        <div className="px-2">
          <a className="text-blue-500 hover:text-blue-800" href="https://github.com/dandra-mo"><AiFillGithub /></a>
          </div> 
        <div className="px-2">
          <a className="text-blue-500 hover:text-blue-800" href="https://pqdtopen.proquest.com/doc/2434756577.html?FMT=ABS&pubnum=28002881">Published Work</a>
          </div> 
        <div className="px-2">
          <a className="text-blue-500 hover:text-blue-800" href="https://drive.google.com/file/d/1EeVg8CSlZAVMBMBrfY_BPsgdt1xHsYNp/view?usp=sharing">Resume</a>
          </div> 
          <div className="px-2">
          <a className="text-blue-500 hover:text-blue-800" href="#">Blog</a>
          </div>
      </div>
        </div>
                    {/* <!-- profile pics --> */}
      <div class="mt-4 flex justify-between bg-black">
        <div className="px-2">
          <img
          src={home.mainImg.url}
          size=""
          className="lg:w-3/5 md:w-2/5 sm:w-1/5"
          alt=""
          />
        </div>
      </div>
    </div>
  </div>

          {/* <!-- Research projects -- */}
    <div className="px-5 my-8">
        <div className="uppercase tracking-wide text-lg text-indigo-600 font-bold pt-3">
          <h1>{home.research.title}</h1>
        </div>
    </div>
                {/* <!-- card -- */}
    <div className="sm:grid grid-cols-2 gap-4">
    {home.research.items.map(item => (
     <Project item={item}/>
  ))}
  </div>
                {/* <!-- Node/JS projects */}
    <div className="px-5 my-8">
        <div className="uppercase tracking-wide text-lg text-indigo-600 font-bold pt-3">
          <h1>{home.projects.title}</h1>
        </div>
    </div>
                      {/* <!-- card -- */}
    <div className="sm:grid grid-cols-2 gap-4">
    {home.projects.items.map(item => (
      <Project item={item}/>
  ))}
   </div>

             {/* <!-- Blog -- */ }
    {/* <div className="px-5 my-8">
        <div className="uppercase tracking-wide text-lg text-indigo-600 font-bold pt-3">
          <h1>{home.blog.title}</h1>
        </div>
    </div> */}
                {/* <!-- card -- */}
    {/* <div className="grid grid-cols-2 gap-4">
    {home.blog.items.map(item => (
     <Project item={item}/>
  ))}
  </div> */}
   </div>
)}



export const getStaticProps = getStaticContent({query: {type: "landingPage", limit: 1}})