import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/List.module.css'

export default function List() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.container}`}>
        <h1 className={styles.title}>
          Ваші улюбленці, яких ми шукаємо
        </h1>

        <div className={`${styles.row} ${styles.mt}`}>
          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/tvari.jpg" alt=""/>
            <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
            <p className={styles.p}>Рекс</p>
            </div>
          </div>

          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/tvari.jpg" alt=""/>
            <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
            <p className={styles.p}>Рекс</p>
            </div>
          </div>

          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/tvari.jpg" alt=""/>
            <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
            <p className={styles.p}>Рекс</p>
            </div>
          </div>

          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/tvari.jpg" alt=""/>
            <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
            <p className={styles.p}>Рекс</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
