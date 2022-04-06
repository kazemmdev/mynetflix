import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";

const Welcome = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const sendToRegister = (e) => {
        e.preventDefault();

        if(email) {
            navigate("/register?mail=" + email)
        }
    }

    return (
        <div className="relative h-screen border-b-8 border-gray-800 px-11">
            <div className="absolute inset-0 -top-24 -z-1">
                <img
                    className="h-full w-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/153cf88a-03b1-4eea-b34c-ed044b614fa0/DE-en-20220307-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt=""
                />
                <div className="concord-img-gradient"></div>
            </div>
            <div className="max-w-4xl h-full flex flex-col justify-center items-center w-full mx-auto text-center text-white">
                <h1 className="mx-auto max-w-3xl text-6xl font-bold">
                    Unlimited movies, TV shows, and more.
                </h1>
                <h2 className="text-2xl my-4">
                    Watch anywhere. Cancel anytime.
                </h2>
                <form className="mx-auto max-w-3xl w-full" onSubmit={sendToRegister}>
                    <h3 className="text-lg my-4">
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </h3>
                    <div className="flex h-20">
                        <div className="flex-1 bg-white p-4 pb-0 text-left text-gray-900">
                            <Input
                                label="Email address"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(v) => setEmail(v.target.value)}
                                hasBorder={false}
                            />
                        </div>
                        <button className="bg-red-600 text-2xl px-7 hover:bg-red-500">
                            Get Started
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Welcome;
