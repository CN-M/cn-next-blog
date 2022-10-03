import '../styles/globals.scss'
import Main from '../components/Main'

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  )
}

export default MyApp
