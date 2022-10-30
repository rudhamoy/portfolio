import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigations'
import HomePage from '../components/home'
import Services from '../components/services'
import Process from '../components/process'
import Contact from '../components/contact'
import SideNav from '../components/Navigations/sideNav'
import Work from '../components/work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rudhamoy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex relative">
        <div className="hidden sm:block absolute left-3 top-[40%] sm:bottom-16 z-50">
          <SideNav />
        </div>
        {/* <SideNav /> */}
        <div className="absolute w-full top-0 z-50">
          <Navigation />
        </div>
        
        <div className="snap-y snap-mandatory h-screen w-[100vw] overflow-scroll bg-zinc-800 text-white">
          <div className="snap-start h-[100vh]">
            <HomePage />
          </div>
          <div className="snap-start h-[100vh]">
            <Services />
          </div>
          <div className="snap-start h-[100vh]">
            <Process />
          </div>
          <div className="snap-start h-[100vh]">
            <Work />
          </div>
          <div className="snap-start bg-violet-800 sm:bg-purple-800">
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}
