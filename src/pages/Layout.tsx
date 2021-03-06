import React, {ReactElement} from "react";

import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/SearchOutlined';

import {SideMenu} from "../components/SideMemu";
import {SearchTextField} from "../components/SearchTextField";
import {useHomeStyles} from "./Home/theme";
import {Tags} from "../components/Tags";
import {Users} from "../components/Users";


interface ILayout {
    children: React.ReactNode
}

export const Layout: React.FC<ILayout> = ({children}): ReactElement => {
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid sm={8} md={6} item>
                    {children}
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant='outlined'
                            placeholder='Поиск по твиту'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon/>
                                    </InputAdornment>
                                )
                            }}
                            fullWidth/>
                        <Tags classes={classes}/>
                        <Users/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}