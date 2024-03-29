import Head from 'next/head';
import Image from 'next/image';
import styles from './scss/Layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';

const name = 'Taro Kobayashi';
export const siteTitle = 'Trelloppoi';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={`${styles.header} ${styles.clusterHeader}`}>
        <h1>TRELLOPPOI <span> - トレロっぽい -</span></h1>
        <div className={`${styles.cluster} ${styles.clusterHamburger}`}>
          <div>ABOUT</div>
          <div className={styles.hamburger}>三</div>
        </div>
      </header>
      {/* MAIN CONTENTS */}
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}
