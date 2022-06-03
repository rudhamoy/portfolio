import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigations'
import HomePage from '../components/home'
import Services from '../components/services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rudhamoy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
      </Head>
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-zinc-800">
        <div className="sticky top-0">
          <Navigation />
          </div>
        <div className="snap-start">
          <HomePage />
        </div>
        <div className="snap-start">
          <Services />
        </div>
      </div>
    </>
  )
}
