export default function FService() {
    const content = [
        [
            "bi bi-router-fill",
            "High Quality Internet Services",
            `The internet has become an essential part of every business and our personal lives.
             At Space Matrix Solutions we deliver High Quality Internet Services for all your Business
            and Private needs`
            
        ],
        [
            "bi bi-file-code-fill",
            "Web and Software Development",
            `Every business needs software that help automate the business process, 
            save time and increase productivity.
            Our High-End software Development team would help you grow your business`
        ],
        [
            "bi bi-laptop",
            "ICT Training",
            `In our ever growing and changing technology enabled environment one must be up to date with the trend or be lost in the tides, 
            that is why at Space Matrix Solutions we believe in constant human development through our modern and up to date training programs.`
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