import React from 'react'
// import Head from 'next/head'
import { getStaticContent, getTipe } from '@tipe/next'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Project from '../components/project'

export default function Home({ documents }) {
  const home = documents[0].fields

  return (
    <div style={{ background: 'black' }}>
      <header
        className="flex items-center justify-items-center container flex "
        style={{ height: '100vh', margin: '0 auto', padding: '0px 7vw' }}
      >
        <div>
          <div className="flex items-center mb-4 flex-wrap">
            <div className="flex-col lg:pr-4 mb-4 lg:mb-0 w-full lg:w-auto">
              <figure style={{ margin: 0, padding: 0, width: '80px' }}>
                <img
                  src={`${home.mainImg.url}?w=160&h=160&fit=crop`}
                  style={{ width: '100%', borderRadius: '100%', border: '3px solid white' }}
                  alt=""
                />
              </figure>
            </div>
            <div className="flex-col">
              <h1 className="font-bold text-white text-2xl md:lg:text-3xl lg:text-4xl">{home.title}</h1>
            </div>
          </div>

          {/* <!-- bio --> */}
          <div>
            <p className="description w-full mt-2 text-gray-500 text-sm md:text-base lg:text-xl">{home.description}</p>
          </div>

          {/* <!-- links --> */}
          <div className="mt-6 flex">
            <div className="pr-3">
              <a className="text-white" href="https://www.linkedin.com/in/d-andra-moss-phd-she-her-hers-7547161b4/">
                <AiFillLinkedin style={{ fontSize: '30px' }} />
              </a>
            </div>
            <div className="px-3">
              <a className="text-white" href="https://github.com/dandra-mo">
                <AiFillGithub style={{ fontSize: '30px' }} />
              </a>
            </div>
            <div className="px-3">
              <a className="text-xs text-gray-400" href="mailto:dandramossphd@gmail.com?subject=Hello">
                dandramossphd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {home.sections.map((sectionItem) => (
          <section
            key={sectionItem.value.title}
            className="py-8"
            style={{ margin: '0 auto', backgroundImage: 'linear-gradient(#030303, black)' }}
          >
            <div className="container py-4" style={{ margin: '0 auto', padding: '0px 7vw' }}>
              <div>
                <div className="tracking-wide text-white font-bold py-3">
                  <h2 className="text-xl">{sectionItem.value.title}</h2>
                </div>
              </div>
              {/* <!-- card -- */}
              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {sectionItem.value.items.map((item, i) => (
                  <Project item={item} key={item.value.title} last={i === sectionItem.value.items.length - 1} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  const { tipe } = getTipe(ctx)
  const { documents } = await tipe.getDocuments({ type: 'landingPage', limit: 1 })
  return {
    props: { documents },
    revalidate: 60,
  }
}
