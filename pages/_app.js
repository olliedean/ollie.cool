import '../styles/globals.css'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());  


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-b from-violet-800 to-violet-900 flex">
      <div className="max-w-5xl w-full mx-auto flex text-white">
        <Component {...pageProps} />
      </div>
    </div>
  )  
}

export default MyApp
