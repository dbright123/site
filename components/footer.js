export default function Footer() {
    return (
        <>
            <footer id="footer" className="rounded">
                <div class="footer-newsletter">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>By subscribing for daily news feed on update within on the services been rendered</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" className="rounded-pill" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}