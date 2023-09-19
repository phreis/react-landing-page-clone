import arrowWhite from './AndyHooke/62c465b0c5c60d512ddd0779_right-arrow-white.svg';
import conceptHero from './AndyHooke/62c6bb066902bfc92596d8dd_concept-hero (1).jpg';
import logo from './AndyHooke/62c7f86e12d1acb4787312ab_Andy-Hooke-pfp-crop-small.jpg';
import arrow from './AndyHooke/62c80e4cfe2a39725202fc60_right-arrow-purple.svg';
import styles from './App.module.scss';

export default function App() {
  return (
    <main>
      <div className={styles.bgnoise} />
      <div className={styles.bggradient} />
      <div className={styles.navbar}>
        <div className={styles.navbarLogoText}>
          <img className={styles.navbarLogo} src={logo} alt="AndyHooke" />
          <div className={styles.navbarText}>
            <span>Andy Hooke</span>
            <span className={styles.navbarTextRow}>
              <div className={styles.navbarLogoDot} />
              available for hire
            </span>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/#">Why me</a>
            </li>
            <li>
              <a href="/#">Work</a>
            </li>
            <li>
              <a href="/#">Process</a>
            </li>
            <li>
              <a href="/#">FAQ</a>
            </li>
            <li>
              <div className={styles.navTextWwmeContainer}>
                <a className={styles.navTextWwme} href="/#">
                  Work with me
                </a>
                <img src={arrow} alt="arrow" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <header>
        <div className={`${styles.pagepadding} ${styles.headerSection}`}>
          <h1>High-end Webflow design & development</h1>
          <p className={styles.textSizeLarge}>
            Agency-quality Webflow websites with the personal touch of a
            freelancer.
          </p>

          <div className={styles.buttonContainer}>
            <a className={styles.baseButton} href="/#">
              <div className={styles.buttonArrowContainer}>
                Work with me
                <img src={arrowWhite} alt="arrowWhite" />
              </div>
            </a>

            <a
              className={`${styles.baseButton} ${styles.buttonBright}`}
              href="/#"
            >
              Learn more
            </a>
          </div>
          <div className={styles.heroImageContainer}>
            <img src={conceptHero} alt="conceptHero" />
          </div>
        </div>
      </header>
      <section className={styles.darkSection}>
        <div className={styles.pagepadding}>section1</div>
      </section>
      <section className={styles.lightSection}>
        <div className={styles.pagepadding}>section2</div>
      </section>
      <footer className={styles.darkSection}>
        <div className={styles.pagepadding}>footer</div>
      </footer>
    </main>
  );
}
