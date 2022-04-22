export default function FService() {
    const content = [
        [
            "bi bi-router-fill",
            "ENTERPRISE NETWORK SOLUTIONS",
            `Space Matrix Solutions Int'l Ltd is a leading provider of consulting services and
            technologies that enable our clients to realize real business value through the utilization of data Technology.
            We pride ourselves on transforming problems into solutions. And we're very good at it. No matter how unique or complex the matter,
            if it's possible we'll solve it. Our mission is to be recognized as a pacesetter in providing innovative, effective solutions to our customers.`
            
        ],
        [
            "bi bi-person-x",
            "GENERAL IT CONSULTING SERVICES AND TRAINING",
            `Our IT strategy and consulting services are your primary steps toward transforming your enterprise IT and improving your business efficiency.
            Our experts have the requisite industry experience and best-in-class tools to assess your entire support operation.
            We look at your IT support services holistically, identifying improvement areas that will have the best impact on employee productivity,
            service levels, and customer satisfaction.`
        ],
        [
            "bi bi-bar-chart",
            "INTERNET SERVICE PROVIDER",
            `Partnering with Multiple Teleports, Satellite, and Fiber Network Operators and software providers locally and internationally,
            we have the ability to deliver broadband internet and “State of the Art” software solution to any business organization around the world.
            We also have fixed wireless networks deployed in Nekede, Mbonu Ojike, Concorde Hotel, and Ogbaku in Imo State, Nigeria,
            providing Wi-Fi internet access to a wide number of users daily.`
        ],
        [
            "bi bi-file-code-fill",
            "MANAGEMENT SOFTWARE SOLUTIONS",
            `We serve establishments with information technology by delivering sophisticated software solutions and high-quality services.
            We identified the gap in quality customized software development services being provided within the market and came up with a mission of providing innovative,
            leading-edge, customized software solutions to companies across industries.`
        ]
    ];
    return (
        <>
            <section id="featured-services" className="featured-services">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        
                        {
                            content.map((item, ind) => {
                                const icon = item[0]
                                const title = item[1];
                                const desc = item[2];
                                return (
                                    <>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                            <div className="icon-box" data-aos="fade-up" data-aos-delay={(1 + ind) * 100}>
                                                <div className="icon"><i className={icon}></i></div>
                                                <h4 className="title"><a href="">{title}</a></h4>
                                                <p className="description">{desc}</p>
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
