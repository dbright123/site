import Image from "next/image"

export default function Team() {
    const data = [
        [
            "/mac.png",
            "MacDonald Opera",
            "CEO and Founder"
        ],
        [
            "/prince.png",
            "Prince Opera",
            "Managing Director"
        ]
    ]
    return (
        <>
            <section id="team" className="testimonials">
                <div className="container" data-aos="zoom-in">
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                            {
                                data.map((item, ind) => {
                                    const logo = item[0];
                                    const name = item[1];
                                    const rank = item[2];
                                    return (
                                        <>
                                            <div key={ind} className="swiper-slide">
                                                <div className="testimonial-item">
                                                    <Image src={logo} className="testimonial-img" width="226px" height="233" alt="worker" />
                                                    <h3>{name}</h3>
                                                    <h4>{rank}</h4>
                                                </div>
                                            </div>

                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}