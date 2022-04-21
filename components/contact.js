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
                            <iframe className="mb-4 mb-lg-0 dFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59925947.681075856!2d14.914031099999997!3d23.547259599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259353d5f055d%3A0x80b0a97e17271cf1!2sSpace%20Matrix%20Solutions%20International%20Limited!5e0!3m2!1sen!2sng!4v1650556756760!5m2!1sen!2sng" frameBorder="0" allowFullScreen></iframe>
            
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
                                
                                <div className="text-center"><button type="submit" className="rounded-circle btn btn-outline-primary" >Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}