import Link from "next/link";
import navStyles from '../styles/Nav.module.scss'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <div className={navStyles.items}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/articles'>Articles</Link></li>
            {/* <li><Link href='/speeches'>Speeches</Link></li> */}
        </div>
        <hr />
    </nav>  
  )
}

export default Nav