import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../store/userSlice";
import LogoSvg from "../../assets/logo.svg";

const Navbar = () => {
    const user = useSelector(selectUser);

    return (
        <div className="w-full max-w-8xl mx-auto bg-transparent sticky z-50">
            <div className="mx-12 pt-8 flex justify-between">
                <a href="/">
                    <img className="w-40 h-12" src={LogoSvg} alt="" />
                </a>
                <div className="flex space-x-4">
                    {!user && (
                        <div>
                            <Link
                                className="bg-red-600 text-white rounded px-4 py-2"
                                to="/login"
                            >
                                Sign in
                            </Link>
                        </div>
                    )}
                    {user && (
                        <Link to="/profile" className="cursor-pointer">
                            <img
                                className="w-10 h-10 rounded-md"
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                alt=""
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
