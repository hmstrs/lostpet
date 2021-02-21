import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={[styles.container, styles.row].join(' ')}>
          <a
            href="#"
          >
            <svg width="50" height="50" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M128 55.0053C138.19 55.0053 146.048 55.3898 151.571 56.1587C157.095 56.9276 163.143 58.6961 169.714 61.4642C170.095 61.6693 171.071 60.6697 172.643 58.4654C174.214 56.2612 176.357 53.288 179.071 49.546C181.786 45.8039 184.81 41.8312 188.143 37.6278C191.476 33.4244 195.452 29.0159 200.071 24.4024C204.69 19.7889 209.286 15.8931 213.857 12.7149C220.714 7.89639 226.571 4.48753 231.429 2.48835C236.286 0.48917 241.429 -0.305386 246.857 0.104703C249.714 5.12829 249.69 19.302 246.786 42.6257C243.881 65.9495 240.857 81.3023 237.714 88.6838C244.286 101.499 248.976 114.853 251.786 128.744C254.595 142.636 256 154.811 256 165.268C256 174.187 251.167 184.158 241.5 195.179C231.833 206.2 220.262 216.093 206.786 224.859C193.31 233.625 179.214 241.006 164.5 247.004C149.786 253.001 137.619 256 128 256C118.381 256 106.214 253.001 91.5 247.004C76.7857 241.006 62.6905 233.625 49.2143 224.859C35.7381 216.093 24.1667 206.2 14.5 195.179C4.83333 184.158 0 174.187 0 165.268C0 154.811 1.40476 142.636 4.21429 128.744C7.02381 114.853 11.7143 101.499 18.2857 88.6838C15.1429 81.3023 12.119 65.9495 9.21429 42.6257C6.30952 19.302 6.28571 5.12829 9.14286 0.104703C14.6667 -0.305386 19.8333 0.48917 24.6429 2.48835C29.4524 4.48753 35.2381 7.89639 42 12.7149C46.5714 15.8931 51.1905 19.7889 55.8571 24.4024C60.5238 29.0159 64.5238 33.4244 67.8571 37.6278C71.1905 41.8312 74.2143 45.8039 76.9286 49.546C79.6429 53.288 81.7857 56.2612 83.3571 58.4654C84.9286 60.6697 85.9048 61.6693 86.2857 61.4642C92.8571 58.6961 98.9048 56.9276 104.429 56.1587C109.952 55.3898 117.81 55.0053 128 55.0053ZM128 224.859C116.882 219.911 96.6019 207.91 104.429 199.485C109.472 191.531 143.52 190.817 151.571 199.485C158.013 206.419 138.541 219.29 128 224.859ZM166.762 122.784C166.762 99.7394 149.408 81.0578 128 81.0578C106.592 81.0578 89.2382 99.7394 89.2382 122.784C89.2382 128.545 93.5768 133.216 98.9287 133.216C104.281 133.216 108.619 128.545 108.619 122.784C108.619 111.262 117.296 101.921 128 101.921C138.704 101.921 147.381 111.262 147.381 122.784C147.381 133.783 139.475 142.794 129.446 143.59L126.87 143.718C122.05 144.32 118.31 148.729 118.31 154.079V164.511L118.375 165.727C118.935 170.915 123.03 174.942 128 174.942C133.352 174.942 137.69 170.272 137.69 164.511V163.196L139.53 162.634C155.307 157.35 166.762 141.507 166.762 122.784Z" fill="white"/>
            </svg>
          </a>

          <div>
            <a href="#">Попросити допомоги</a>
            <a href="#">Стати помічником</a>
            <a href="#">Підтримати проєкт</a>
          </div>
        </div>
      </footer>
    );
}