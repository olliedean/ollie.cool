import '../styles/globals.css'

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
