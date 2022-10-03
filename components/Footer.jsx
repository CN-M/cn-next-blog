import footerStyles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <hr />
        <div className={footerStyles.copyright}>
            <p>&copy; 2022 C.N.M.</p>
        </div>
    </footer>
  )
}

export default Footer