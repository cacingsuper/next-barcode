import React from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'

function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Barcode</title>
            </Head>
            {children}
        </div>
    )
}

export default Layout
