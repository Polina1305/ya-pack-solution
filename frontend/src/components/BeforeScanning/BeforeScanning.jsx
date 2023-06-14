import React, { useState, useEffect } from 'react';
import styles from './BeforeScanning.module.css';
import ProductCard from '../ProductCard/ProductCard';
import DoneBlock from '../DoneBlock/DoneBlock';

function BeforeScanning({ order, scanProduct }) {
  const [isCopied, setIsCopied] = useState(false);
  const [matchingProducts, setMatchingProducts] = useState([]);
  const [scanProducts, setScanProducts] = useState([]);

  useEffect(() => {
    setScanProducts((prevScanProducts) => [...prevScanProducts, scanProduct]);
  }, [scanProduct]);

  useEffect(() => {
    if (order.skus !== undefined) {
      const filteredProducts = order.skus.filter(
        (item) => !scanProducts.includes(item.barcode)
      );

      setMatchingProducts(filteredProducts);
    }
  }, [order.skus, scanProducts]);

  const removeProduct = (barcode) => {
    setMatchingProducts((prevMatchingProducts) =>
      prevMatchingProducts.filter((item) => item.barcode !== barcode)
    );
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [isCopied]);

  const renderAmount = () => {
    if (matchingProducts.length !== 0) {
      return (
        <span className={styles.amount}>{matchingProducts.length} товара</span>
      );
    }
    return null;
  };

  const renderProductCards = () => (
    <div className={styles.cardList}>
      {matchingProducts.map((item) => (
        <ProductCard
          key={item.barcode}
          item={item}
          removeProduct={removeProduct}
          setIsCopied={setIsCopied}
        />
      ))}
    </div>
  );

  const renderDone = () => {
    if (matchingProducts.length === 0) {
      return <DoneBlock order={order} />;
    }
    return null;
  };

  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h1 className={styles.title}>Ячейка B-09</h1>
        <span className={styles.post}>Почта России</span>
      </div>
      {renderAmount()}
      {renderProductCards()}
      {isCopied && <div className={styles.copyCode}>Штрихкод скопирован</div>}
      {renderDone()}
    </section>
  );
}

export default BeforeScanning;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './BeforeScanning.module.css';
// import ProductCard from '../ProductCard/ProductCard';
// import DoneBlock from '../DoneBlock/DoneBlock';
// import BigButton from '../BigButton/BigButton';

// function BeforeScanning({ order, scanProduct }) {
//   const [isCopied, setIsCopied] = useState(false);
//   const [matchingProducts, setMatchingProducts] = useState([]);
//   const [scanProducts, setScanProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setScanProducts((prevScanProducts) => [...prevScanProducts, scanProduct]);
//   }, [scanProduct]);

//   useEffect(() => {
//     if (order.skus !== undefined) {
//       const filteredProducts = order.skus.filter(
//         (item) => !scanProducts.includes(item.barcode)
//       );

//       setMatchingProducts(filteredProducts);
//     }
//   }, [scanProducts]);

//   const removeProduct = (barcode) => {
//     setMatchingProducts((prevMatchingProducts) =>
//       prevMatchingProducts.filter((item) => item.barcode !== barcode)
//     );
//   };

//   useEffect(() => {
//     if (isCopied) {
//       const timeout = setTimeout(() => {
//         setIsCopied(false);
//       }, 1500);

//       return () => clearTimeout(timeout);
//     }
//     return undefined;
//   }, [isCopied]);

//   const renderAmount = () => {
//     if (matchingProducts.length !== 0) {
//       return (
//         <span className={styles.amount}>{matchingProducts.length} товара</span>
//       );
//     }
//     return null;
//   };

//   const handleButtonClick = () => {
//     const isValid = true;
//     if (isValid) {
//       navigate('/finish');
//     }
//   };

//   const renderProductCards = () => (
//     <div className={styles.cardList}>
//       {matchingProducts.map((item) => (
//         <ProductCard
//           key={item.barcode}
//           item={item}
//           removeProduct={removeProduct}
//           setIsCopied={setIsCopied}
//         />
//       ))}
//     </div>
//   );

//   const renderDone = () => {
//     if (matchingProducts.length === 0) {
//       return (
//         <>
//           <DoneBlock scanProducts={scanProducts} />
//           <BigButton
//             isValid
//             buttonText="Закрыть посылку"
//             onClick={handleButtonClick}
//           />
//         </>
//       );
//     }
//     return null;
//   };

//   return (
//     <section className={styles.section}>
//       <div className={styles.box}>
//         <h1 className={styles.title}>Ячейка B-09</h1>
//         <span className={styles.post}>Почта России</span>
//       </div>
//       {renderAmount()}
//       {renderProductCards()}
//       {isCopied && <div className={styles.copyCode}>Штрихкод скопирован</div>}
//       {renderDone()}
//     </section>
//   );
// }

// export default BeforeScanning;

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './BeforeScanning.module.css';
// import ProductCard from '../ProductCard/ProductCard';
// import DoneBlock from '../DoneBlock/DoneBlock';
// import BigButton from '../BigButton/BigButton';

// // const doneBlock = {
// //   position: "fixed",
// //   left: "28px"
// // }

// function BeforeScanning({ order, scanProduct }) {
//   const [isCopied, setIsCopied] = useState(false);
//   const [matchingProducts, setMatchingProducts] = useState([]);
//   const [scanProducts, setScanProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setScanProducts((prevScanProducts) => [...prevScanProducts, scanProduct]);
//   }, [scanProduct]);

//   useEffect(() => {
//     // const storedProductsString = localStorage.getItem('products');
//     // const storedProducts = JSON.parse(storedProductsString);
//     if (order.skus !== undefined) {
//       const filteredProducts = order.skus.filter(
//         (item) => !scanProducts.includes(item.barcode)
//       );

//       setMatchingProducts(filteredProducts);
//     }
//   }, [scanProducts]);

//   useEffect(() => {
//     if (isCopied) {
//       const timeout = setTimeout(() => {
//         setIsCopied(false);
//       }, 1500);

//       return () => clearTimeout(timeout);
//     }

//     return undefined;
//   }, [isCopied]);

//   const renderAmount = () => {
//     if (matchingProducts.length !== 0) {
//       return (
//         <span className={styles.amount}>{matchingProducts.length} товара</span>
//       );
//     }
//     return null;
//   };

//   const renderProductCards = () => (
//     <div className={styles.cardList}>
//       {matchingProducts.map((item) => (
//         <ProductCard key={item.barcode} item={item} setIsCopied={setIsCopied} />
//       ))}
//     </div>
//   );

//   const isValid = true;

//   const handleButtonClick = () => {
//     if (isValid) {
//       navigate('/finish');
//     }
//   };

//   const renderDone = () => {
//     if (matchingProducts.length === 0) {
//       return (
//         <>
//           <DoneBlock scanProducts={scanProducts} />
//           <BigButton
//             isValid={isValid}
//             buttonText="Закрыть посылку"
//             onClick={handleButtonClick}
//           />
//         </>
//       );
//     }
//     return null;
//   };

//   return (
//     <section className={styles.section}>
//       <div className={styles.box}>
//         <h1 className={styles.title}>Ячейка B-09</h1>
//         <span className={styles.post}>Почта России</span>
//       </div>
//       {renderAmount()}
//       {renderProductCards()}
//       {isCopied && <div className={styles.copyCode}>Штрихкод скопирован</div>}
//       {renderDone()}
//     </section>
//   );
// }

// export default BeforeScanning;
