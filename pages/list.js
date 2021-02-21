import useSwr from 'swr'
import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/List.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function List() {
  const { data, error } = useSwr('/api/posts', fetcher);

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
            <img src="/humster.jpg" alt=""/>
            <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
            <p className={styles.p}>Пухляш</p>
            </div>
          </div>

          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/sobaka.jpg" alt=""/>
            <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
            <p className={styles.p}>Рекс</p>
            </div>
          </div>

          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/cat.jpeg" alt=""/>
            <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
            <p className={styles.p}>Барсік</p>
            </div>
          </div>

          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/spider.jpeg" alt=""/>
            <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
            <p className={styles.p}>Ларрі</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
