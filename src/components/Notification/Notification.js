import React from "react";
import { useContext } from "react";
import NotificationCartContext from "../../Context/NotificationCartContext";

const Notification = () => {
    const {notification} = useContext(NotificationCartContext)

    if(notification.message === '') {
        return null
    }

    return(
        <div
            style={{ color: notification.severity === 'error' ? 'red' : 'green'}}>
            {notification.message}
        </div>
    )
}

export default Notification