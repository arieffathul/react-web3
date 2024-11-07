/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const pengguna = {
        name: 'Arief Fathul Ulum',
        NIM : '2312010012',
        username : 'ariefganteng',
        password: 'password123',
    };

    const login = (username, password) => {
        if (username === pengguna.username && password === pengguna.password) {
            setUser({
                name: pengguna.name,
                NIM : pengguna.NIM,
            });
            setIsLoggedIn(true);
        } else {
            alert('Username atau password salah');
        }
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <LoginContext.Provider value={{ user, login, logout, isLoggedIn }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContext;