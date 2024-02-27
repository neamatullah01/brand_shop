import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
        .then(res => {
            console.log(res)
            alert('register done')
        })
        .catch(error=> console.error(error))
    }



    return (
        <div className="hero">
            <div className="hero-content flex-col w-full">
                <div className="text-center py-3">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-2/4 shadow-gray-700 bg-[#ACA6A680] ">
                    <form onSubmit={handleRegister} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered"/>
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#F45E0C] border-0">Register</button>
                        </div>

                    </form>
                    <p className="text-center mb-5 ">Already have an account? <Link className="font-semibold text-[#F45E0C]" to="/login">Login Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;