import React, {ReactElement, useState} from "react";
import {Button, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {ModalBlock} from "../../components/ModalBlock";
import {LoginModal} from "./components/LoginModal";
import {RegisterModal} from "./components/RegisterModal";

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6AC3FD',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '240%',
        height: '240%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        wight: 680,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
            marginBottom: 40,
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20,
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    }
}))

export const SignIn: React.FC = (): ReactElement => {
    const classes = useStylesSignIn()
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>()

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp')
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined)
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideBigIcon} color='primary'/>
                <ul className={classes.blueSideListInfo}>
                    <li>
                        <Typography variant='h6'>
                            <SearchIcon className={classes.blueSideListInfoIcon}/>
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            <PeopleIcon className={classes.blueSideListInfoIcon}/>
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            <MessageIcon className={classes.blueSideListInfoIcon}/>
                            Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideTwitterIcon} color='primary'/>
                    <Typography className={classes.loginSideTitle} variant="h4">
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <br/>
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: 20}} variant='contained'
                            color='primary' fullWidth>
                        Зарегестрироваться
                    </Button>
                    <Button onClick={handleClickOpenSignIn} variant='outlined' color='primary' fullWidth>
                        Войти
                    </Button>
                    <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal}/>
                    <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal}/>
                </div>
            </div>
        </div>
    )
}
