import React, {ReactElement} from "react";
import {useHistory} from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import {useHomeStyles} from "../pages/Home/theme";

interface BackButtonProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const BackButton: React.FC<BackButtonProps> = ({classes}): ReactElement => {
    const history = useHistory()

    const handleClickButton = () => {
        history.goBack()
    }
    
    return (
        <IconButton onClick={handleClickButton} className={classes.tweetsHeaderBackButton} color='primary'>
            <ArrowBackIcon/>
        </IconButton>
    )
}