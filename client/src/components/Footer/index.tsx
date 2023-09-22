export const Footer = () => {
    return (
        < div className="container-fluid bg-dark text-light footer pt-5 mt-5" >
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="font-weight-bold">Cars - Portal</h5>
                        <p>
                            Discover your dream car at our one-stop destination for comprehensive car information, where you can explore, compare, and choose the perfect vehicle to fit your needs.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Home</a></li>
                            <li><a href="#" className="text-light">Cars</a></li>
                            <li><a href="#" className="text-light">About Us</a></li>
                            <li><a href="#" className="text-light">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <address>
                            <p>Email: <a href="mailto:info@carsportal.com" className="text-light">info@carsportal.com</a></p>
                            <p>Phone: <a href="tel:+11234567890" className="text-light">+1 (123) 456-7890</a></p>
                        </address>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p>&copy; 2023 Cars Portal. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}