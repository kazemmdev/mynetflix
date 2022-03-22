import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import Banner from "../components/banner";
import Navbar from "../components/navbar";
import Row from "../components/row";
import Welcome from "../components/welcome";
import MovieRequests from "../services/movieConstant";

const Home = () => {
    const user = useSelector(selectUser);

    return (
        <div className="w-full">
            <Navbar />
            <div className="mx-auto">
                {!user ? (
                    <Welcome />
                ) : (
                    <>
                        <Banner />
                        <div className="bg-slate-900 pt-10 w-full">
                            <div className=" mx-auto max-w-6xl px-12">
                                {Object.keys(MovieRequests).map(
                                    (key, index) => {
                                        return (
                                            <Row
                                                key={index}
                                                title={MovieRequests[key].title}
                                                fetchUrl={
                                                    MovieRequests[key].url
                                                }
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
