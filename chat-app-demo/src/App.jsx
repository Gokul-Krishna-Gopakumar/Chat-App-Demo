import { Routes, Route, Navigate } from "react-router-dom";
import MainChat from "./pages/main/main";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainChat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
