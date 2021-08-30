import React from 'react'
import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Meta />
            <div className={styles.container}>
            <Nav />
                <main className={styles.main}>
                    <Header />
                    {/* <h1>Hello</h1> */}
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout