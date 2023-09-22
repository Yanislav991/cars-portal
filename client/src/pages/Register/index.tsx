export const Register = () => {
    return (
        <div className="col-6 mx-auto mt-5 p-5">
            <h3>Register</h3>
            <form>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label">Email address</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label">Confirm Password</label>
                </div>
                <button type="button" className="btn btn-primary btn-block mb-4">Register</button>
                <div className="text-center">
                    <p>Already have an account? <a href="#!">Login</a></p>
                </div>
            </form>
        </div>
    )
}