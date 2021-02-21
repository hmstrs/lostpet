import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/Search.module.css'

export default function Search() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.container}`}>
        <h1 className={styles.title}>
          Улюбленці, яких потрібно знайти
        </h1>

        <div className={`${styles.row} ${styles.mt}`}>
          <div className={styles.col}>
            <iframe
              // width="600"
              // height="450"
              style={{border:0}}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBLGPQthFaQ9WWTDxhrCrz2rTOrm9acfh0
                &q=Kyiv">
            </iframe>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <div className={`${styles.rounded} ${styles.imagecard}`}>
                <img src="/humster.jpg" alt=""/>
                <div className={`${styles.cardlabel} ${styles.row} ${styles.flexcenter}`}>
                  <p className={styles.p}>Пухляш</p>
                  <span className={styles.span}>1 км</span>
                </div>
              </div>

              <div className={`${styles.rounded} ${styles.imagecard}`}>
                <img src="/cat.jpeg" alt=""/>
                <div className={`${styles.cardlabel} ${styles.row} ${styles.flexcenter}`}>
                  <p className={styles.p}>Барсік</p>
                  <span className={styles.span}>800 м</span>
                </div>
              </div>

              <div className={`${styles.rounded} ${styles.imagecard}`}>
                <img src="/sobaka.jpg" alt=""/>
                <div className={`${styles.cardlabel} ${styles.row} ${styles.flexcenter}`}>
                  <p className={styles.p}>Рекс</p>
                  <span className={styles.span}>1.6 км</span>
                </div>
              </div>

              <div className={`${styles.rounded} ${styles.imagecard}`}>
                <img src="/spider.jpeg" alt=""/>
                <div className={`${styles.cardlabel} ${styles.row} ${styles.flexcenter}`}>
                  <p className={styles.p}>Ларрі</p>
                  <span className={styles.span}>2 км</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
