import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { getPlans } from "../services/subscriptionService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const user = useSelector(selectUser);
    const [plans, setPlans] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPlans();
            setPlans(response.data);
        };

        fetchData();
    }, []);

    return (
        <div className="w-full">
            <Navbar />
            <div className="mx-auto -mt-20">
                <div className="bg-slate-900 pt-10 w-full h-screen">
                    <div className="w-full max-w-2xl mx-auto my-16 p-12">
                        <div>
                            <h1 className="text-4xl text-white pb-2 border-b border-gray-500">
                                Edit Profile
                            </h1>
                            <div className="flex pt-5">
                                <img
                                    className="w-16 h-16 rounded-md"
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                    alt="avatar"
                                />
                                <div className="pl-5">
                                    <div className="text-white text-2xl">
                                        <h3>{user?.payload.name}</h3>
                                    </div>
                                    <div className="text-gray-400 text-xl">
                                        <h3>{user?.payload.email}</h3>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-3xl text-white pb-2 pt-10 border-b border-gray-500">
                                Plans
                            </h2>
                            {plans &&
                                plans.map((item) => (
                                    <div
                                        key={item.id}
                                        className="my-5 flex items-center"
                                    >
                                        <div className="flex-1">
                                            <p className="text-sm text-white flex-1">
                                                {item.display_name}
                                                <span className="text-gray-400 pl-2">
                                                    ({item.quality})
                                                </span>
                                                <span className="text-gray-100 pl-2">
                                                    {item.price}$ / month
                                                </span>
                                            </p>
                                        </div>
                                        {user?.payload.subscribed &&
                                        item.id === user?.payload.plan.id ? (
                                            <div className="mr-a text-white px-2 py-1 text-sm">
                                                {user?.payload.plan.expires_at}
                                            </div>
                                        ) : (
                                            <Link
                                                to={"/subscribe/" + item.id}
                                                className="mr-a bg-red-600 text-white px-2 py-1 rounded-md text-sm"
                                            >
                                                Subscribe
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            <button className="bg-red-600 w-full rounded-md mt-5 py-2 text-white ">
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
