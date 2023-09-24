import { useState } from "react";
import axios from 'axios'
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('api/login', {
                email,
                password
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/browse')
        }
        catch (error) {
            console.log('Login failed.', error);
        }
    };

    return (
        <div className="col-6 mx-auto mt-5 p-5">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label">Email address</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label">Password</label>
                </div>
                <button type="button" className="btn btn-primary btn-block mb-4">Login</button>
                <div className="text-center">
                    <p>Not a member? <NavLink to='/register'>Register</NavLink></p>
                </div>
            </form>
        </div>
    )
}