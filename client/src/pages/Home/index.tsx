import { NavLink } from "react-router-dom";

export const Home = () => {
    const image = require('../../assets/images/main2.jpg');
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={image} style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="text-primary text-uppercase">// Cars Portal //</h6>
                            <h2 className="mb-4"><span className="text-primary">Cars Portal</span> Is The Best Place To Find Information About Cars</h2>
                            <p className="mb-4">Car Info is your ultimate destination for comprehensive car information. Explore detailed specifications, reviews, and pricing for a wide range of vehicles, empowering you to make informed decisions about your next car purchase.</p>
                            <div className="row g-4 mb-3 pb-3">
                                <div className="col-12" >
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                            <span className="fw-bold text-secondary">01</span>
                                        </div>
                                        <div className="ps-3">
                                            <h6>Browse Cars</h6>
                                            <span>Start your car search by browsing our extensive catalog of vehicles. Filter and sort by make, model, year, and more to find cars that match your preferences.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12" >
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                            <span className="fw-bold text-secondary">02</span>
                                        </div>
                                        <div className="ps-3">
                                            <h6>Select Favorites</h6>
                                            <span>Once you've found cars that catch your eye, add them to your favorites list. This makes it easy to keep track of the vehicles you're interested in.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12" >
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                            <span className="fw-bold text-secondary">03</span>
                                        </div>
                                        <div className="ps-3">
                                            <h6>Compare and Decide</h6>
                                            <span> Compare your favorite cars side by side, examining key features, specifications, and pricing. This step helps you make an informed decision and select the perfect car that suits your needs and budget.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <NavLink to='/browse' className="btn btn-primary py-3 px-5">Browse<i className="fa fa-arrow-right ms-3"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6Up">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-car fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Explore a Wide Range of Vehicles</h5>
                                    <p>Discover an extensive collection of cars, from sleek sedans to rugged SUVs, and get detailed information on their specifications, features, and pricing.</p>
                                    <a className="text-secondary border-bottom" href="#">Browse Cars</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6Up">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-heart fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Select Your Favorites</h5>
                                    <p>Add cars you love to your favorites list, making it easy to compare and decide on the perfect vehicle for your needs.</p>
                                    <a className="text-secondary border-bottom" href="#">Create Favorites List</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6Up">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-balance-scale fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Compare and Decide</h5>
                                    <p>Compare your favorite cars side by side, evaluating specifications, user reviews, and prices to make an informed choice.</p>
                                    <a className="text-secondary border-bottom" href="#">Start Comparing</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}