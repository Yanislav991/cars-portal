import { NavLink, useNavigate } from 'react-router-dom';
import { useGlobalState } from '../GlobalStateProvider';

export const Navigation = () => {
    const [state, dispatch] = useGlobalState();
    const navigate = useNavigate();
    const logout = () => {
        //@ts-expect-error
        dispatch({ isUserLoggedIn: false })
        localStorage.removeItem('token');
        navigate("/");
    }
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
                    {((props) => {
                        if (state.isUserLoggedIn) {
                            return (
                                <>
                                    <NavLink to="/add-car" className="nav-item nav-link">Add Car</NavLink>
                                    <NavLink to="/browse" className="nav-item nav-link">Browse</NavLink>
                                    <div style={{ width: "20px" }}></div>
                                    <a href="#" onClick={logout} className="nav-item nav-link">Logout</a>
                                </>
                            );
                        } else {
                            return (
                                <>
                                    <NavLink to="/register" className="nav-item nav-link">Register</NavLink>
                                    <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                                </>
                            );
                        }
                    })()}


                </div>
            </div>
        </nav>
    )
}