import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { selectUser } from "./store/userSlice";

import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Subscribe from "./pages/subscribe";

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
                <Route path="/subscribe/:id" element={<Subscribe />} />
            </Routes>
        </BrowserRouter>
    );
};

export default ReactRoutes;
