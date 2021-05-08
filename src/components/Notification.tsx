import React, {ReactElement, useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from "@material-ui/lab/Alert";
import {Color} from "@material-ui/lab/Alert/Alert";

interface INotification {
    children: (callback: (text: string, type: Color) => void) => ReactElement
}

export const Notification: React.FC<INotification> = ({children}): ReactElement => {
    const [open, setOpen] = useState<boolean>(false)
    const [notificationObj, setNotificationObj] = useState<{text: string, type: Color}>()

    const handleClose = (): void => {
        setOpen(false)
    }

    const openNotification = (text: string, type: Color): void => {
        setNotificationObj({text, type})
        setOpen(true)
    }

    return (
        <>
            {children(openNotification)}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={notificationObj?.type}>
                    {notificationObj?.text}
                </Alert>
            </Snackbar>
        </>
    )
}