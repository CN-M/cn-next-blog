import Link from "next/link";
import navStyles from '../styles/Nav/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <div className={navStyles.items}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/articles'>Articles</Link></li>
        </div>
        <hr />
    </nav>  
  )
}

export default Nav