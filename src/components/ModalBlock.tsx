import React, {ReactElement} from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


interface ModalBlockProps {
    title?: string
    children: React.ReactNode
    visible?: boolean
    onClose: () => void
}

export const ModalBlock: React.FC<ModalBlockProps> = ({title, children, onClose, visible = false}): ReactElement | null=> {
    if(!visible) {
        return null
    }
    return (
        <Dialog open={visible} onClose={onClose} arial-label='close'>
            <DialogTitle id='form-dialog-title'>
                <IconButton
                    onClick={onClose}
                    color='secondary'
                    arial-label='close'>
                    <CloseIcon style={{fontSize: 26}} color='secondary'/>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}