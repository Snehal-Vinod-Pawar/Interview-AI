import { createBrowserRouter, Navigate } from "react-router-dom";
import { useAuth } from "./features/auth/hooks/useAuth";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";


export const router = createBrowserRouter([
    { path: "/", element: <Protected> <p> Home Page </p> </Protected> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
]);
