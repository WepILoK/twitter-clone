import React, {ReactElement} from "react";
import {useHistory} from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

import {useHomeStyles} from "../pages/Home/theme";



export const BackButton: React.FC = (): ReactElement => {
    const history = useHistory()
    const classes = useHomeStyles()

    const handleClickButton = () => {
        history.goBack()
    }
    
    return (
        <IconButton onClick={handleClickButton} className={classes.tweetsHeaderBackButton} color='primary'>
            <ArrowBackIcon/>
        </IconButton>
    )
}