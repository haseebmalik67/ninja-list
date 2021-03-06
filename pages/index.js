import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/ >
    </Head>
   <div>
     <h1 className={styles.title}>Home Page</h1>
     <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        venenatis est urna, quis sollicitudin ex rutrum eget. Phasellus
        tincidunt, massa vel feugiat interdum, urna tortor egestas diam, id
        bibendum diam velit vel urna. Etiam malesuada, massa efficitur vehicula
        commodo, urna lectus vehicula enim, at condimentum massa lorem sed ex.
        Nullam condimentum, est auctor porta malesuada, ipsum felis tristique
        nibh, mollis egestas diam ipsum ac ipsum. Sed sodales sem est, ut
        pellentesque leo tincidunt eget. Aenean faucibus tempor ornare. Donec
        auctor sem ut interdum maximus. Etiam eu est in risus ultrices tempus
        quis eget eros. Cras tristique, nibh quis tincidunt lobortis.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        dapibus ante in risus laoreet, quis ullamcorper elit volutpat. Morbi ut
        hendrerit sem. Vestibulum maximus sapien non sapien malesuada tempus.
        Quisque sit amet sapien nec urna pharetra viverra vulputate nec massa.
        Maecenas rhoncus ac odio ac varius. Phasellus at viverra nisl, quis
        aliquet est. Integer placerat at ante id hendrerit. Ut ut malesuada
        dolor. Aliquam pulvinar quam vel ornare imperdiet. Donec id consequat
        mauris. Vivamus mattis sagittis tincidunt. Suspendisse potenti. Vivamus
        mattis vulputate orci, at tristique arcu auctor id. Ut porttitor sit
        amet lacus consequat lacinia. Duis convallis vitae elit vitae.
      </p>
      <Link href="/ninjas">
      <a className={styles.btn}>See Ninjas Listing</a>
      </Link>
   </div>
   </>
  )
}
