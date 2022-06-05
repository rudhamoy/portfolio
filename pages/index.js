import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigations'
import HomePage from '../components/home'
import Services from '../components/services'
import Process from '../components/process'
import Contact from '../components/contact'
import SideNav from '../components/Navigations/sideNav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rudhamoy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex relative">
      <div className="absolute left-3 bottom-16 z-50">
          <SideNav />
        </div>
          {/* <SideNav /> */}
      <div className="snap-y snap-mandatory h-screen w-[100vw] overflow-scroll bg-zinc-800 ">
        <div className="sticky top-0">
          <Navigation />
        </div>
        <div className="snap-start">
          <HomePage />
        </div>
        <div className="snap-start">
          <Services />
        </div>
        <div className="snap-start">
          <Process />
        </div>
        <div className="snap-start bg-purple-800">
          <Contact />
         
        </div>
      </div>
      </div>
    </>
  )
}
