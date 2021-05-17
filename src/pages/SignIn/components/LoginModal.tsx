import React, {ReactElement, useEffect, useRef} from "react";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup"

import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {Color} from "@material-ui/lab/Alert/Alert";

import {ModalBlock} from "../../../components/ModalBlock";
import {useStylesSignIn} from "../index";
import {fetchSignIn} from "../../../store/ducks/user/actionCreators";
import {selectUserStatus} from "../../../store/ducks/user/selectors";
import {LoadingStatus} from "../../../store/types";


interface LoginModalProps {
    open: boolean
    onClose: () => void
}

export interface LoginFormProps {
    email: string
    password: string
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите корректную почту'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
});

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose}): ReactElement => {
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectUserStatus)
    const openNotificationRef = useRef<(text: string, type: Color) => void>(() => {})
    const classes = useStylesSignIn()
    const {control, handleSubmit, formState: {errors}} = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });

    const onSubmit = (data: LoginFormProps) => {
        dispatch(fetchSignIn(data))
    };

    useEffect(()=> {
        if (loadingStatus === LoadingStatus.SUCCESS) {
            openNotificationRef.current('Авторизация успешна!', 'success')
            onClose()
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Неверный логин или пароль', 'error')
        }
    }, [loadingStatus])

    return (
        <ModalBlock visible={open} onClose={onClose}
                    classes={classes} title='Войти в аккаунт'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
                    <FormGroup arial-label='position' row>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField
                                id='email'
                                label='Email Address'
                                type='email'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='filled'
                                helperText={errors.email?.message}
                                error={!!errors.email}
                                fullWidth
                                className={classes.loginSideField}
                                autoFocus
                                {...field}/>}
                        />
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField
                                id='password'
                                label='Пароль'
                                type='password'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='filled'
                                helperText={errors.password?.message}
                                error={!!errors.password}
                                className={classes.loginSideField}
                                fullWidth
                                {...field}/>}
                        />
                        <Button disabled={loadingStatus === LoadingStatus.LOADING} type='submit' variant='contained'
                                color='primary' fullWidth>
                            Войти
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </ModalBlock>
    )
}