import Head from 'next/head'
import styles from '../styles/Home.module.css'
import QRCode from 'qrcode.react'
import {useRouter,withRouter} from  'next/router'
import {useState,useEffect} from 'react'

function Home({router}) {
  const value = router.query.token || 'dannylamtoro'
  console.log(router.query)
  return (
    <div className={styles.container}>
      <Head>
        <title>Barcode | By dannylamtoro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{display:'flex',justifyContent:'center',alignItems: "center",width:'100vw',resize: 'both'}}>
          <QRCode size={300} value={value} renderAs="svg" includeMargin={true}/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Lamtoro
        </a>
      </footer>
    </div>
  )
}

export default withRouter(Home)
