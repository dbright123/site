import Image from "next/image"
export default function About() {
    const desc = `
        At Space Matrix we strive to improve efficiency, increase quality, and faster turn-around time, at an affordable cost.
        This results in a unique experience of cost-effective yet excellent solutions.
        We manage our company with the utmost professionalism and maintain the very best degree of professional and private ethics.
        We are here to serve you,and serve you well.
    `;
    return (
        <>
            <section id="about" className="about section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About</h2>
                        <h3>Find Out More <span>About Us</span></h3>
                        <p className="text-center">WE RENDER HIGH QUALITY PRODUCTS AND INTERNET SERVICES THAT ARE USED AND LOVED BY THOUSANDS OF CUSTOMERS</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                            <Image src="/about.jpg" className="img-fluid" width="2529" height="1944" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <h3>Our Mission</h3>
                            <p className="fst-italic">
                                {desc}
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-router-fill"></i>
                                    <div>
                                        <h5>ENTERPRISE NETWORK SOLUTIONS</h5>
                                        <p>The internet has become an essential part of every business and our personal lives.
                                            At Space Matrix Solutions we deliver High Quality Internet Services for all your Business
                                            and Private needs</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-file-code-fill"></i>
                                    <div>
                                        <h5>MANAGEMENT SOFTWARE SOLUTIONS</h5>
                                        <p>Every business needs software that help automate the business process,
                                            save time and increase productivity.
                                            Our High-End software Development team would help you grow your business</p>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}