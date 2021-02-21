import useSWR from "swr";
import Head from "next/head";
import styles from "../styles/List.module.css";
import Link from "next/link";

export default function List() {
  const { data, error } = useSWR("/api/posts", fetch);

  return (
    <div>
      <Head>
        <title>Шукаємо зараз</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/find">
        <a className={styles.FindMy}> Знайдіть мого</a>
      </Link>

      <main className={`${styles.main} ${styles.container}`}>
        <h1 className={styles.title}>Ваші улюбленці, яких ми шукаємо</h1>

        <div className={`${styles.row} ${styles.mt}`}>
          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/humster.jpg" alt="" />
            <div
              className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}
            >
              <p className={styles.p}>Пухляш</p>
            </div>
          </div>

          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/sobaka.jpg" alt="" />
            <div
              className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}
            >
              <p className={styles.p}>Рекс</p>
            </div>
          </div>

          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/cat.jpeg" alt="" />
            <div
              className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}
            >
              <p className={styles.p}>Барсік</p>
            </div>
          </div>

          <div className={`${styles.rounded} ${styles.imagecard}`}>
            <img src="/spider.jpeg" alt="" />
            <div
              className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}
            >
              <p className={styles.p}>Ларрі</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
