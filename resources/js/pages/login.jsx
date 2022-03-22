import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import Input from "../components/input";

const Login = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const submitHandle = async (e) => {
        e.preventDefault();

        await login({
            email: email,
            password: password,
        })
            .then(() => navigation("/"))
            .catch((error) => setErrors(error.response.data.errors));
    };

    return (
        <div className="relative h-screen px-11">
            <div className="absolute inset-0 -top-24 -z-1">
                <img
                    className="h-full w-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/153cf88a-03b1-4eea-b34c-ed044b614fa0/DE-en-20220307-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt=""
                />
                <div className="concord-img-gradient"></div>
            </div>
            <div className="max-w-md h-full flex flex-col justify-center items-center w-full mx-auto text-white">
                <div className="w-full m-auto p-16 bg-slate-800 rounded">
                    <h2 className="font-medium text-3xl">Sign In</h2>
                    <form className="pt-5" onSubmit={submitHandle}>
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(v) => setEmail(v.target.value)}
                            error={errors["email"] ?? null}
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(v) => setPassword(v.target.value)}
                            error={errors["password"] ?? null}
                        />
                        <button
                            type="submit"
                            className="bg-red-500 px-4 py-3 mt-4 rounded-md w-full text-white hover:bg-red-600 active:bg-red-700"
                        >
                            Submit
                        </button>
                        <div className="flex py-5">
                            <p className="text-gray-500">
                                New to Netflix?
                                <Link
                                    className="pl-2 hover:underline text-white"
                                    to="/register"
                                >
                                    Sign up now
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
