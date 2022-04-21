import Link from "next/link"
export default function Hero() {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container" data-aos="zoom-out" data-aos-delay="100">
                    <h1>Welcome to <span>Space Matrix Solution</span></h1><hr /><br />
                    <h2 className="text-center"> WE RENDER HIGH QUALITY PRODUCTS AND INTERNET SERVICES THAT ARE USED AND LOVED BY THOUSANDS OF CUSTOMERS</h2>
                    <div className="d-flex">
                        <a href="#about" className="btn-get-started rounded-pill scrollto">Get Started</a>
                        <a href="https://www.youtube.com/watch?v=A09mbhffBcA" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                    </div>
                </div>
            </section>
        </>
    );
}