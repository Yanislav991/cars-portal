import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from '../../axios-config';

export const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('test')
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                alert('Password and Confirm Password fields are not matching.');
                return;
            }
            const response = await axios.post('/register', {
                username,
                password
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/browse');
        }
        catch (error) {
            console.log('Register failed.', error);
        }
    }
    return (
        <div className="col-6 mx-auto mt-5 p-5">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input type="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="form-label">Username address</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <label className="form-label">Confirm Password</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>
                <div className="text-center">
                    <p>Already have an account? <NavLink to='/login'>Login</NavLink></p>
                </div>
            </form>
        </div>
    )
}