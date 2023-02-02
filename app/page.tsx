import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p> */}
        <div>
            <Image
              src="/logo.svg"
              alt="220 Cord & Code Logo"
              width={100}
              height={24}
              priority
            />
        </div>
      </div>

      <div className={styles.center}>
        <Image
          src="/logo.svg"
          alt="220 Cord & Code Logo"
          width={200}
          height={40}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/magazine"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Magazine <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="/post"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Post <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>  
      </div>
    </main>
  )
}
