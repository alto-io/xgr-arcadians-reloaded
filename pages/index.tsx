import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import NftGrid from 'components/NftGrid'
import nftCollections from "../assets/nftCollections"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>XGR Arcadians Renderer</title>
        <meta name="description" content="An open and flexible standard that allows your NFT to be displayed (and animated!) in any game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <a href="renderer.json" target="_blank">
            <p>
              Arcadians Renderer - ORA images with GLTF animations
            </p>
          </a>
          <div>
            <a
              href="https://www.opgames.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/opg.png"
                alt="OP Games Logo"
                width={90}
                height={100}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/alto-io/xgr-arcadians"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              project_url <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              source code and documentation
            </p>
          </a>

          <a
            href="renderer.json"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              renderer_url <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              json file containing rendering info
            </p>
          </a>


          <a
            href="image/2345"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              /image <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              image route example
            </p>
          </a>

          <a
            href="animation/2345"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              /animation <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              animation route example
            </p>
          </a>

          <a
            href="assets/arcadians.ora"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              /assets/arcadians.ora <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              ORA file containing all arcadian parts
            </p>
          </a>

          <a
            href="assets/arcadians.gltf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              /assets/arcadians.gltf <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              GLTF file containing arcadian animations
            </p>
          </a>

          <a
            href="raw/arcadians.psd"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              /arcadians.psd <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Source PSD file (can export to ORA using GIMP)
            </p>
          </a>

          <a
            href="raw/arcadians.blend"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              /arcadians.blend <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Source Blender file (can export to GLTF using Blender)
            </p>
          </a>


        </div>      </main>
    </>
  )
}
