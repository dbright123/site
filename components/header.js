import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <Link href="/"><a className="logo"><Image src="/logo.png" alt="" width="300px" height="140px" /></a></Link>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link href="#hero"><a className="nav-link scrollto active" >Home</a></Link></li>
                            <li><Link href="#about"><a className="nav-link scrollto" >About Us</a></Link></li>
                            <li><Link href="#services"><a className="nav-link scrollto" >Internet Services</a></Link></li>                            
                                                      
                            <li><Link href="#contact"><a className="nav-link scrollto" >Contact</a></Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>
    );
}