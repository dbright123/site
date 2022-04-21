import Image from "next/image"
export default function Service() {
    const dataPlan = [
        [
            "/sport.png",
            "Residential Plan",
            "Click for more details"
        ],
        [
            "/bike.png",
            "Small Business",
            "Click for more details"
        ],
        [
            "/airplane.png",
            "Large Enterprise plan",
            "Click for more details"
        ],
        [
            "",
            "Custom plan",
            "Special Order"
        ]
    ];
    return (
        <>
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2> Internet Services</h2>
                        <h3>Check our <span>Data Bundle</span></h3>
                        <p>Check out our cheap data plan which might be of interest to you</p>
                    </div>

                    <div className="row">
                        
                        {
                            dataPlan.map((item, ind) => {
                                const icon = item[0];
                                const title = item[1];
                                const price = item[2];
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={(1 + ind) * 100}>
                                            <div className="icon-box">
                                                <div className="icon">
                                                    {
                                                        (ind == 3) ? <i className="bi bi-bar-chart"></i>
                                                            :
                                                            <Image className = "rounded-circle" src = {icon} height = "25px" width = "25px"/>
                                                    }
                                                </div>
                                                <h4><a href="">{title}</a></h4>
                                                <br /><hr />
                                                <p>{price}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                                
                            })
                        }                      

                    </div>

                </div>
            </section>
        </>
    );
}