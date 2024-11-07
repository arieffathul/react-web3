/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [message, setMessage] = useState(null);

    const showNotification = (message) => {
        setMessage(message);
        setTimeout(() => {
            setMessage(null);
        }, 3000);
    };

    return (
        <NotificationContext.Provider value={{ message, showNotification }}>
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotification() {
    return useContext(NotificationContext);
}