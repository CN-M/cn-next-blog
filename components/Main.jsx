import Meta from "./Meta"
import Nav from "./Nav"
import Footer from "./Footer"
<<<<<<< HEAD
// import mainStyles from '../styles/main.module.css'

=======
import mainStyles from '../styles/Main/Main.module.css'
>>>>>>> parent of 0b3efac (used sass support)

const Main = ({children}) => {
  return (
    <>
      <Meta />
      <div className="container">
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