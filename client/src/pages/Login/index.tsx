import { useState } from "react";
import axios from '../../axios-config';
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalState } from "../../components/GlobalStateProvider";

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [state, dispatch] = useGlobalState();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', {
                username,
                password
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            //@ts-expect-error
            dispatch({ isUserLoggedIn: true, username: response.data.username });
            navigate('/browse');
        }
        catch (error) {
            alert("Incorrect password or username.");
            console.log('Login failed.', error);
        }
    };

    return (
        <div className="col-6 mx-auto mt-5 p-5">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="form-label">Username</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label">Password</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
                <div className="text-center">
                    <p>Not a member? <NavLink to='/register'>Register</NavLink></p>
                </div>
            </form>
        </div>
    )
}