export default function Contact() {
    return (
        <>
            <style jsx>{`
                .dFrame {
                  border:0; width: 100%; height: 384px;
                }
            
             `}
            </style>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <h3><span>Contact Us</span></h3>
                        <p>We are always available 24/7 to attend to you</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-6">
                            <div className="info-box mb-4">
                                <i className="bx bx-map"></i>
                                <h3>Our Address</h3>
                                <p>#40. Mbonu Ojike Street,
                                    Off Mbari Street Ikenegbu Layout,
                                    Owerri, Imo State,</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>info@spacematrix.net</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p>+234 803 577 2605</p>
                            </div>
                        </div>

                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-6 ">
                            <iframe className="mb-4 mb-lg-0 dFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                        </div>

                        <div className="col-lg-6">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                
                                <div className="text-center"><button type="submit" className="" >Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}