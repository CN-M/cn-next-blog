import Meta from "./Meta"
import Nav from "./Nav"
import Footer from "./Footer"
import mainStyles from '../styles/Main/Main.module.css'

const Main = ({children}) => {
  return (
    <>
      <Meta />
      <div className={mainStyles.container}>
      <Nav />
      <section>
          {children}
      </section>
      <Footer />
      </div>
    </>
  )
}

export default Main