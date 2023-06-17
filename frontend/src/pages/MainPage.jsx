import styles from './Pages.module.css';
import BeforeScanning from '../components/BeforeScanning/BeforeScanning';
import AfterScanning from '../components/AfterScanning/AfterScanning';

function MainPage({
  scanRecommendedPackage,
  scanNotRecommendedPackage,
  scanProduct,
  setScanProduct,
  order,
  removeElement,
  setRemoveElement,
}) {
  return (
    <section className={styles.main}>
      <BeforeScanning
        order={order}
        scanProduct={scanProduct}
        removeElement={removeElement}
      />
      <AfterScanning
        order={order}
        scanProduct={scanProduct}
        setScanProduct={setScanProduct}
        scanRecommendedPackage={scanRecommendedPackage}
        scanNotRecommendedPackage={scanNotRecommendedPackage}
        removeElement={removeElement}
        setRemoveElement={setRemoveElement}
      />
    </section>
  );
}

export default MainPage;
