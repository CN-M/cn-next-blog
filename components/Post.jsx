import Meta from "./Meta"
import postStyles from '../styles/Post/Post.module.css'

const Main = ({children}) => {
  return (
    <>
      <Meta />
      <div className={postStyles.container}>
      <section>
          {children}
      </section>
      </div>
    </>
  )
}

export default Main