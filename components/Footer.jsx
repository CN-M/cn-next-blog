import footerStyles from '../styles/Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={footerStyles.footer}>
        <hr />
        <div className={footerStyles.copyright}>
            <p>&copy; { currentYear } C.N.M.</p>
        </div>
    </footer>
  )
}

export default Footer