import React, {ReactElement, useEffect, useRef} from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStylesSignIn} from "../index";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup"
import {Notification} from "../../../components/Notification";
import {Color} from "@material-ui/lab/Alert/Alert";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignUp} from "../../../store/ducks/user/actionCreators";
import {selectUserStatus} from "../../../store/ducks/user/selectors";
import {LoadingStatus} from "../../../store/types";


interface IRegisterModalProps {
    open: boolean
    onClose: () => void
}

export interface IRegisterFormProps {
    fullName: string
    userName: string
    email: string
    password: string
    password2: string
}

const LoginFormSchema = yup.object().shape({
    fullName: yup.string().required('Введите полное имя'),
    userName: yup.string().required('Введите логин'),
    email: yup.string().email('Неверная почта').required('Введите корректную почту'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
    password2: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают')
});

export const RegisterModal: React.FC<IRegisterModalProps> = ({open, onClose}): ReactElement => {
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectUserStatus)
    const openNotificationRef = useRef<(text: string, type: Color) => void>(() => {
    })
    const classes = useStylesSignIn()
    const {control, handleSubmit, formState: {errors}} = useForm<IRegisterFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });

    const onSubmit = (data: IRegisterFormProps) => {
        dispatch(fetchSignUp(data))
    };

    useEffect(() => {
        if (loadingStatus === LoadingStatus.SUCCESS) {
            openNotificationRef.current('Регистрация успешна! Подтвердите свою регистрацина на указаной вами почте', 'success')
            onClose()
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Неверно введены данные', 'error')
        }
    }, [loadingStatus])

    return (
        <ModalBlock visible={open} onClose={onClose}
                    classes={classes} title='Войти в аккаунт'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
                    <FormGroup arial-label='position' row>
                        <Controller
                            name="fullName"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField
                                className={classes.registerField}
                                autoFocus
                                id='fullName'
                                label='Введите полное имя'
                                type='text'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='filled'
                                helperText={errors.fullName?.message}
                                error={!!errors.fullName}
                                fullWidth
                                {...field}/>}
                        />
                        <Controller
                            name="userName"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField
                                className={classes.registerField}
                                id='userName'
                                label='Введите логин'
                                type='login'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='filled'
                                helperText={errors.userName?.message}
                                error={!!errors.userName}
                                fullWidth
                                {...field}/>}
                        />
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField
                                className={classes.registerField}
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
                                {...field}/>}
                        />
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField
                                className={classes.registerField}
                                id='password'
                                label='Пароль'
                                type='password'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='filled'
                                helperText={errors.password?.message}
                                error={!!errors.password}
                                fullWidth
                                {...field}/>}
                        />
                        <Controller
                            name="password2"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField
                                className={classes.registerField}
                                id='password2'
                                label='Повторите пароль'
                                type='password'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='filled'
                                helperText={errors.password2?.message}
                                error={!!errors.password2}
                                fullWidth
                                {...field}/>}
                        />
                        <Button disabled={loadingStatus === LoadingStatus.LOADING} type='submit' variant='contained'
                                color='primary' fullWidth>
                            Регистрация
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </ModalBlock>
    )
}