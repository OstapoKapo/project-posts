import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            <div className="Logo">Creator</div>
            <nav >
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
            </nav>
        </header>
    )
}

export default Header