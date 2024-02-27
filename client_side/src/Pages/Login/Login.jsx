
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch()
    }



    return (
        <div className="hero">
            <div className="hero-content flex-col w-full">
                <div className="text-center py-3">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-2/4 shadow-gray-700 bg-[#ACA6A680] ">
                    <form onSubmit={handleLogin} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#F45E0C] border-0">Login</button>
                        </div>

                    </form>
                    <p className="text-center mb-6 ">Do not have an account? <Link className="font-semibold text-[#F45E0C]" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;