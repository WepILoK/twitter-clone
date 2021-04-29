import React from "react";
import {
    Container,
    createStyles,
    Grid,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';
import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMemu";


export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        fontSize: 36,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgb(29, 161, 242, 0.1)',
                '& h6, svg path': {
                    color: theme.palette.primary.main
                }
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.1s ease-in-out',
        }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderBottom: 0,
        borderTop: 0,
    },
    tweet: {
        paddingTop: 15,
        paddingLeft: 20,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetsHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        maxWidth: 450,
    },
    tweetUserName: {
        color: grey[500]
    },
}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0,
        },
    })
)(InputBase)

export const Home = () => {
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        {
                            [...new Array(20)
                                .fill(<Tweet classes={classes}
                                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa dignissimos eaque, enim ipsam laboriosam laborum nihil odio officiis quia reprehenderit sequi tempora voluptatibus voluptatum.'}
                                             user={{
                                                 fullName: 'Full Name',
                                                 userName: 'UserName',
                                                 avatarUrl: 'https://cdn.dribbble.com/users/112117/screenshots/3792149/avatar-dribbble.png',
                                             }}/>)]
                        }
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField placeholder='Поиск по Твиттеру' fullWidth/>
                </Grid>
            </Grid>
        </Container>
    )
}
//classnames