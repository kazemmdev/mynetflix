import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";

const Register = () => {
    const navigation = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirm] = useState("");

    const [errors, setErrors] = useState([]);

    const submitHandle = async (e) => {
        e.preventDefault();
        await register({
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
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
                    <h2 className="font-medium text-3xl">Register</h2>
                    <form className="pt-5" onSubmit={submitHandle}>
                        <Input
                            type="text"
                            name="name"
                            label="Full Name"
                            value={name}
                            onChange={(v) => setName(v.target.value)}
                            error={errors["name"] ?? null}
                        />
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
                        <Input
                            label="Password Confirmation"
                            name="passconf"
                            type="password"
                            value={password_confirmation}
                            onChange={(v) => setPasswordConfirm(v.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-red-500 px-4 py-3 mt-4 rounded-md w-full text-white hover:bg-red-600 active:bg-red-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
