import styles from './Header.module.css';
import Menu from '../../images/menu.svg';
import Yandex from '../../images/yandex.svg';
import Market from '../../images/market.svg';
import More from '../../images/more.svg';

function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.headerGroup}>
        <button type="button" className={styles.headerButton}>
          <img src={Menu} alt="Menu" />
        </button>
        <div className={styles.logo}>
          <img src={Yandex} alt="Yandex" />
          <img src={Market} alt="Market" />
          <span className={styles.logoName}>Cклад</span>
        </div>
      </div>
      <h1 className={styles.headerTitle}>Упаковка</h1>
      <div className={styles.headerGroup}>
        <div className={styles.orderStatus}>
          <span>sof-natgemokee</span>
          <div className={styles.progress}>79%</div>
        </div>
        <button type="button" className={styles.headerButton}>
          <img src={More} alt="More" />
        </button>
      </div>
    </section>
  );
}

export default Header;
