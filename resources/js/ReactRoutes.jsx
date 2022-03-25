import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import { selectUser } from "./store/userSlice";

const ReactRoutes = () => {
    const user = useSelector(selectUser);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/" /> : <Login />}
                />
                <Route
                    path="/register"
                    element={user ? <Navigate to="/" /> : <Register />}
                />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default ReactRoutes;
