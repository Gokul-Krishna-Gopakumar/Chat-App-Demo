import { Routes, Route, Navigate } from "react-router-dom";
import MainChat from "./pages/main/main";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { useContext } from "react";
import { AuthContext } from "../../src/context/AuthContext";
import { ChatContextProvider } from "../../src/context/chatContext";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <ChatContextProvider user={user}>
      <Routes>
        <Route path="/" element={user ? <MainChat /> : <Login />} />
        <Route path="/register" element={user ? <MainChat /> : <Register />} />
        <Route path="/login" element={user ? <MainChat /> : <Login />} />
      </Routes>
    </ChatContextProvider>
  );
}
