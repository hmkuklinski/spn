// pages/_app.js
import '../src/App.css'
import ScrollToTop from '../src/ScrollToTop';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
        <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        type="module"
      />
      <Script
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        noModule
      />
      <ScrollToTop />
      <Component {...pageProps} />
      
    </>
    
  );
}

export default MyApp;
