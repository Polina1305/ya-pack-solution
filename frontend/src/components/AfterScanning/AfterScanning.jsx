// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './AfterScanning.module.css';
// import ScanImage from '../../images/scan.svg';
// import ProductCard from '../ProductCard/ProductCard';
// import BigButton from '../BigButton/BigButton';

// function AfterScanning({ order, scanProduct, scanNotRecommendedPackage }) {
//   const [matchingProducts, setMatchingProducts] = useState([]);
//   const [matchingPackage, setMatchingPackage] = useState(new Set());
//   const [notMatchingPackages, setNotMatchingPackages] = useState(new Set());
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (
//       (order.skus && scanProduct) ||
//       (order.skus && scanNotRecommendedPackage)
//     ) {
//       const filteredProducts = order.skus.filter(
//         (item) => item.barcode === scanProduct
//       );
//       setMatchingProducts((prevMatchingProducts) => [
//         ...prevMatchingProducts,
//         ...filteredProducts,
//       ]);

//       if (scanProduct && scanProduct.length === 3 && !Number(scanProduct)) {
//         setMatchingPackage((prevMatchingPackage) =>
//           prevMatchingPackage.add(scanProduct)
//         );
//       }

//       if (scanNotRecommendedPackage) {
//         setNotMatchingPackages((prevNotMatchingPackages) =>
//           prevNotMatchingPackages.add(scanNotRecommendedPackage)
//         );
//       }
//     }
//   }, [order.skus, scanProduct, scanNotRecommendedPackage]);

//   const handleButtonClick = () => {
//     const isValid = true;
//     if (isValid) {
//       navigate('/finish');
//     }
//   };

//   const removeProduct = (barcode) => {
//     setMatchingProducts((prevMatchingProducts) =>
//       prevMatchingProducts.filter((item) => item.barcode !== barcode)
//     );
//   };

//   const renderScanInstructions = () => (
//     <figure className={styles.figure}>
//       <img src={ScanImage} alt="Сканер" />
//       <figcaption>Сканируйте товары из ячейки</figcaption>
//     </figure>
//   );

//   const renderProductCards = () => (
//     <div className={styles.cardList}>
//       {matchingProducts.map((item) => (
//         <ProductCard
//           key={item.barcode}
//           item={item}
//           removeProduct={removeProduct}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <section className={styles.section}>
//       <h1 className={styles.title}>Посылка</h1>
//       <div className={styles.text}>Рекомендованный вид упаковки</div>
//       <div className={styles.packages}>
//         {order.packages &&
//           order.packages.map((item) => (
//             <div key={item.package} className={styles.package}>
//               {item.package}
//             </div>
//           ))}
//       </div>
//       {(matchingPackage.size !== 0 || notMatchingPackages.size !== 0) && (
//         <>
//           <div className={styles.text}>Выбранный вид упаковки</div>
//           <div className={styles.packages}>
//             {[...matchingPackage].map((item) => (
//               <div
//                 key={item}
//                 className={`${styles.package} ${styles.packageRecommended}`}
//               >
//                 {item}
//               </div>
//             ))}
//             {[...notMatchingPackages].map((item) => (
//               <div
//                 key={item}
//                 className={`${styles.package} ${styles.packageNotRecommended}`}
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//       {!scanProduct && renderScanInstructions()}
//       {scanProduct && renderProductCards()}
//       {order.skus &&
//         (matchingPackage.size !== 0 || notMatchingPackages.size !== 0) &&
//         matchingProducts.length === order.skus.length && (
//           <BigButton
//             isValid
//             buttonText="Закрыть посылку"
//             onClick={handleButtonClick}
//           />
//         )}
//     </section>
//   );
// }

// export default AfterScanning;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AfterScanning.module.css';
import ScanImage from '../../images/scan.svg';
import ProductCard from '../ProductCard/ProductCard';
import BigButton from '../BigButton/BigButton';

function AfterScanning({
  order,
  scanProduct,
  scanRecommendedPackage,
  scanNotRecommendedPackage,
}) {
  const [matchingProducts, setMatchingProducts] = useState([]);
  const [matchingPackage, setMatchingPackage] = useState(new Set());
  const [notMatchingPackages, setNotMatchingPackages] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    if (
      (order.skus && scanProduct) ||
      (order.skus && scanNotRecommendedPackage)
    ) {
      const filteredProducts = order.skus.filter(
        (item) => item.barcode === scanProduct
      );
      setMatchingProducts((prevMatchingProducts) => [
        ...prevMatchingProducts,
        ...filteredProducts,
      ]);

      if (scanProduct) {
        setMatchingPackage((prevMatchingPackage) =>
          prevMatchingPackage.add(scanRecommendedPackage)
        );
      }
      if (scanNotRecommendedPackage) {
        console.log(scanNotRecommendedPackage);
        setNotMatchingPackages((prevNotMatchingPackages) =>
          prevNotMatchingPackages.add(scanNotRecommendedPackage.packagetype)
        );
      }
      console.log(matchingPackage);
    }
  }, [
    order.skus,
    scanProduct,
    scanRecommendedPackage,
    scanNotRecommendedPackage,
  ]);

  const handleButtonClick = () => {
    const isValid = true;
    if (isValid) {
      navigate('/finish');
    }
  };

  const removeProduct = (barcode) => {
    setMatchingProducts((prevMatchingProducts) =>
      prevMatchingProducts.filter((item) => item.barcode !== barcode)
    );
  };

  const renderScanInstructions = () => (
    <figure className={styles.figure}>
      <img src={ScanImage} alt="Сканер" />
      <figcaption>Сканируйте товары из ячейки</figcaption>
    </figure>
  );

  const renderProductCards = () => (
    <div className={styles.cardList}>
      {matchingProducts.map((item) => (
        <ProductCard
          key={item.barcode}
          item={item}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Посылка</h1>
      <div className={styles.text}>Рекомендованный вид упаковки</div>
      <div className={styles.packages}>
        {order.packages &&
          order.packages.map((item) => (
            <div key={item.barcode} className={styles.package}>
              {item.package}
            </div>
          ))}
      </div>
      {(matchingPackage.size !== 0 || notMatchingPackages.size !== 0) && (
        <>
          <div className={styles.text}>Выбранный вид упаковки</div>
          <div className={styles.packages}>
            {[...matchingPackage].map((item) => (
              <div
                key={item}
                className={`${styles.package} ${styles.packageRecommended}`}
              >
                {item}
              </div>
            ))}
            {[...notMatchingPackages].map((item) => (
              <div
                key={item}
                className={`${styles.package} ${styles.packageNotRecommended}`}
              >
                {item}
              </div>
            ))}
          </div>
        </>
      )}
      {!scanProduct && renderScanInstructions()}
      {scanProduct && renderProductCards()}
      {order.skus &&
        (matchingPackage.size !== 0 || notMatchingPackages.size !== 0) &&
        matchingProducts.length === order.skus.length && (
          <BigButton
            isValid
            buttonText="Закрыть посылку"
            onClick={handleButtonClick}
          />
        )}
    </section>
  );
}

export default AfterScanning;