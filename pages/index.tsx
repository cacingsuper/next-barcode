import styles from '../styles/Home.module.css'
import QRCode from 'qrcode.react'
import {useRouter,withRouter} from  'next/router'
import {useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import DownloadButton from '../components/Button/Download'

function Home({router}):JSX.Element {
  const value = router.query.token || 'dannylamtoro'
  console.log(value)

  const handleDownload = (e) => {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', `${Date.now()}.png`);
    let canvas = document.getElementById('img-qr') as HTMLCanvasElement;
    let dataURL = canvas.toDataURL('image/png');
    let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
    downloadLink.setAttribute('href', url);
    downloadLink.click();
  }
  return (
    <Layout>
      <main className={styles.main}>
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems: "center",
          width:'auto',
          resize: 'both',
          }}>
          <QRCode
          id='img-qr' 
          size={350} 
          value={value} 
          renderAs="canvas" 
          includeMargin={true}
          />
        </div>
        <div className="w-full">
          <DownloadButton onClick={handleDownload}/>
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
    </Layout>
  )
}

export default withRouter(Home)
