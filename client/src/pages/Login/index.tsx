export const Login = () => {
    return (
        <div className="col-6 mx-auto mt-5 p-5">
            <h3>Login</h3>
            <form>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label">Email address</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label">Password</label>
                </div>
                <div className="row mb-4">
                    <div className="col d-flex">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label"> Remember me </label>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
            </form>
        </div>
    )
}