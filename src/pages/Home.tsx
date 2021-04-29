import React from "react";
import {Grid, IconButton, makeStyles, Paper, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PermIdentity';

const useHomeStyles = makeStyles(() => ({
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {

    }
}))

export const Home = () => {
    const classes = useHomeStyles()

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <ul className={classes.sideMenuList}>
                        <li>
                            <IconButton aria-label='delete' color='primary'>
                                <TwitterIcon/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label='delete' color='primary'>
                                <SearchIcon/>
                            </IconButton>
                            <Typography variant='h6'>Поиск</Typography>
                        </li>
                        <li>
                            <IconButton aria-label='delete' color='primary'>
                                <NotificationIcon/>
                            </IconButton>
                            <Typography variant='h6'>Уведомления</Typography>
                        </li>
                        <li>
                            <IconButton aria-label='delete' color='primary'>
                                <MessageIcon/>
                            </IconButton>
                            <Typography variant='h6'>Сообщения</Typography>
                        </li>
                        <li>
                            <IconButton aria-label='delete' color='primary'>
                                <BookmarkIcon/>
                            </IconButton>
                            <Typography variant='h6'>Закладки</Typography>
                        </li>
                        <li>
                            <IconButton aria-label='delete' color='primary'>
                                <ListIcon/>
                            </IconButton>
                            <Typography variant='h6'>Список</Typography>
                        </li>
                        <li>
                            <IconButton aria-label='delete' color='primary'>
                                <UserIcon/>
                            </IconButton>
                            <Typography variant='h6'>Профиль</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={7}>
                    <Paper>DD</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>DD</Paper>
                </Grid>
            </Grid>
        </div>
    )
}