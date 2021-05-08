import React, {ReactElement} from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStylesSignIn} from "../index";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup"
import {AuthApi} from "../../../services/api/authApi";
import {Notification} from "../../../components/Notification";
import {Color} from "@material-ui/lab/Alert/Alert";

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
    const classes = useStylesSignIn()
    const {control, handleSubmit, formState: {errors}} = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });

    const onSubmit = async (openNotification: (text: string, type: Color) => void, data: LoginFormProps) => {
        try {
            const userData = await AuthApi.signIn(data)
            openNotification('Авторизация успешна!', 'success')
        } catch (error) {
            openNotification('Неверный логин или пароль', 'error')
        }
    };

    return (
        <Notification>
            {
                openNotification => (
                    <ModalBlock visible={open} onClose={onClose}
                                classes={classes} title='Войти в аккаунт'>
                        <form onSubmit={handleSubmit(onSubmit.bind(null, openNotification))}>
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
                                    <Button type='submit' variant='contained'
                                            color='primary' fullWidth>
                                        Войти
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </ModalBlock>
                )
            }
        </Notification>
    )
}