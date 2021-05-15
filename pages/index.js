import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | About</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aut cumque dolore doloremque eveniet fuga, ipsum itaque magni maxime, molestiae natus nemo obcaecati omnis quidem rem totam unde voluptatem?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam blanditiis doloribus eaque enim est exercitationem iste laboriosam laborum porro ratione reiciendis repellat, tempora voluptates voluptatum. Cupiditate libero saepe voluptas.</p>
      <hr />
      <Link href="/ninjas/">
          <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}



