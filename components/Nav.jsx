import Link from "next/link";
<<<<<<< HEAD
=======
import navStyles from '../styles/Nav/Nav.module.css'
>>>>>>> parent of 0b3efac (used sass support)

const Nav = () => {
  return (
    <nav className="nav">
        <div className="items">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/articles'>Articles</Link></li>
        </div>
        <hr />
    </nav>  
  )
}

export default Nav