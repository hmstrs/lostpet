import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/Find.module.css'

export default function Find() {
  const redirectToList = () => location.href = '/';

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.container}`}>
        <h1 className={styles.title}>
          Не хвилюйтесь, знайдемо
        </h1>

        <div className={`${styles.row} ${styles.mt}`}>
          <div className={styles.col}>
            <div>
              <div className={`${styles.minirow} ${styles.row}`}>
                <input
                  className={`${styles.col} ${styles.input} ${styles.rounded}`}
                  type="text"
                  name="pet_type"
                  placeholder="Кіт, пес чи може папуга?"
                />
                <input
                  className={`${styles.col} ${styles.input} ${styles.rounded}`}
                  type="text"
                  name="pet_breed"
                  placeholder="Порода"
                />
              </div>
            </div>

            <div>
              <p className={styles.p}>
                Як ви кличете свого улюбленця?
              </p>
              <input
                className={`${styles.input} ${styles.rounded} ${styles.w100}`}
                type="text"
                name="pet_name"
                placeholder="Оклик, наприклад “Барсик”"
              />
            </div>
            
            <div>
              <p className={styles.p}>
                Якого він кольору?
              </p>
              <input
                className={`${styles.input} ${styles.rounded} ${styles.w100}`}
                type="text"
                name="pet_color"
                placeholder="Окрас, наприклад “Рудий, з білими цятками на вухах“"
              />
            </div>
            
            <div>
              <p className={styles.p}>
                Всі тваринки особливі, чим особлива ваша?
              </p>
              <input
                className={`${styles.input} ${styles.rounded} ${styles.w100}`}
                type="text"
                name="pet_feature"
                placeholder="Додаткові відомості, наприклад “Зелений нашийник”"
              />
            </div>
            
            <div>
              <p className={styles.p}>
                Як вас звати і як зв’язатись?
              </p>
              <div className={`${styles.minirow} ${styles.row}`}>
                <input
                  className={`${styles.col} ${styles.input} ${styles.rounded}`}
                  type="text"
                  name="owner_name"
                  placeholder="Ваше ім’я"
                />
                <input
                  className={`${styles.col} ${styles.input} ${styles.rounded}`}
                  type="text"
                  name="owner_contacts"
                  placeholder="Телефон або Ел. пошта"
                />
              </div>
            </div>
            
            <div>
              <button className={styles.button} onClick={redirectToList}>
                Опублікувати
              </button>
            </div>
          </div>

          <div className={styles.col}>
            <div className={`${styles.rounded} ${styles.imagecard}`}>
              <img src="/dog.jpg" alt=""/>
              <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
                <p className={styles.p}>Як він виглядає? Додайте фото</p>
              </div>
            </div>
            <div className={`${styles.rounded} ${styles.imagecard}`}>
              <img src="/map.jpg" alt=""/>
              <div className={`${styles.cardlabel} ${styles.col} ${styles.flexcenter}`}>
                <p className={styles.p}>Вкажіть місце, де ви бачились востаннє</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
