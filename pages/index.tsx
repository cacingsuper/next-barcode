import Head from 'next/head'
import styles from '../styles/Home.module.css'
import QRCode from 'qrcode.react'
import {useRouter} from  'next/router'
import {useState} from 'react'

export default function Home() {
  const router = useRouter()
  const [value,setValue] = useState('')
  const token = router.query.token || 'dannylamtoro'
  console.log(token)  
  return (
    <div className={styles.container}>
      <Head>
        <title>Barcode | By dannylamtoro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{display:'flex',justifyContent:'center',alignItems: "center",width:'100vw',resize: 'both'}}>
          <QRCode size={300} value={token} renderAs="svg" includeMargin={true}/>
        </div>
        <div className="">
          <textarea name="" id="">
            {token}
          </textarea>
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

