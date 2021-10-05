import React, { createContext } from "react";
import { useState } from "react";

const CartContextNotification = createContext()

export const NotificationCartContextProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotificacion = (severity, message) =>{
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return(
        <CartContextNotification.Provider
            value={{
                notification: {
                    message,
                    severity
                },
                setNotificacion
            }}
        >
            {children}
        </CartContextNotification.Provider>
    )
}

export default CartContextNotification