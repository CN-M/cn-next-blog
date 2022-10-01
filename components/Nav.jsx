import Link from "next/link";

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