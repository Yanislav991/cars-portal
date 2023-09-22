import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-3">
            <NavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>Cars - Portal</h2>
            </NavLink>
            <button type="button" className="navbar-toggler me-4">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to="/register" className="nav-item nav-link">Register</NavLink>
                    <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                    <NavLink to="/add" className="nav-item nav-link">Add</NavLink>
                    <NavLink to="/logout" className="nav-item nav-link">Logout</NavLink>
                    <NavLink to="/browse" className="nav-item nav-link">Browse</NavLink>
                </div>
            </div>
        </nav>
    )
}