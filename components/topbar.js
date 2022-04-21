import Link from "next/link"

export default function TopBar() {
    return (
        <>
            <section id="topbar" className="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><Link href="mailto:info@spacematrix.net">info@spacematrix.net</Link></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+234 803 577 2605</span></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        <Link href="#"><a className="twitter"><i className="bi bi-twitter"></i></a></Link>
                        <Link href="https://web.facebook.com/spacematrixsolutions"><a target="_blank" className="facebook"><i className="bi bi-facebook"></i></a></Link>
                        <Link href="#"><a  className="instagram"><i className="bi bi-instagram"></i></a></Link>
                        <Link href="#"><a  className="linkedin"><i className="bi bi-linkedin"></i></a></Link>
                    </div>
                </div>
            </section>
        </>
    );
}