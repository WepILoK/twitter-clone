import React, {ReactElement} from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStylesSignIn} from "../index";


interface RegisterModalProps {
    open: boolean
    onClose: () => void
}

export const RegisterModal: React.FC<RegisterModalProps> = ({onClose, open}): ReactElement => {
    const classes = useStylesSignIn()

    return (
        <ModalBlock visible={open} onClose={onClose}
                    classes={classes} title='Создайте учетную запись'>
            <FormControl className={classes.loginFormControl} component='fieldset' fullWidth>
                <FormGroup arial-label='position' row>
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id='name'
                        label='Имя'
                        type='name'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='filled'
                        fullWidth/>
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id='email'
                        label='Email Address'
                        type='email'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='filled'
                        fullWidth/>
                    <TextField
                        className={classes.registerField}
                        id='password'
                        label='Пароль'
                        type='password'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='filled'
                        fullWidth/>
                    <Button variant='contained' color='primary' fullWidth>
                        Далее
                    </Button>
                </FormGroup>
            </FormControl>
        </ModalBlock>
    )
}