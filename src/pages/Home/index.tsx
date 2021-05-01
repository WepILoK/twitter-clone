import React, {ReactElement, useEffect} from "react";
import {
    Container,
    Grid,
    InputAdornment,
    Paper,
    Typography,
} from "@material-ui/core";
import {Tweet} from "../../components/Tweet";
import {SideMenu} from "../../components/SideMemu";
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Avatar from '@material-ui/core/Avatar/Avatar';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import {AddTweetForm} from "../../components/AddTweetForm";
import {useHomeStyles} from "./theme";
import {SearchTextField} from "../../components/SearchTextField";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import CircularProgress from "@material-ui/core/CircularProgress";


export const Home: React.FC = (): ReactElement => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)
    console.log(isLoading)
    useEffect(() => {
        dispatch(fetchTweets())
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <AddTweetForm classes={classes}/>
                            </div>
                            <div className={classes.addFormBottomLine}/>
                        </Paper>
                        {isLoading
                            ? <div className={classes.tweetsCentered}>
                                <CircularProgress/>
                            </div>
                            : tweets.map(tweet =>
                                <Tweet classes={classes}
                                       key={tweet._id}
                                       text={tweet.text}
                                       user={tweet.user}/>
                            )}
                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant='outlined'
                            placeholder='Поиск по Твиттеру'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth/>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary='Москва'
                                        secondary={
                                            <Typography component='span' variant='body2' color='textSecondary'>
                                                Твитов: 162 110
                                            </Typography>
                                        }/>
                                </ListItem>
                                <Divider component='li'/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary='#короновирус'
                                        secondary={
                                            <Typography component='span' variant='body2' color='textSecondary'>
                                                Твитов: 174 158
                                            </Typography>
                                        }/>
                                </ListItem>
                                <Divider component='li'/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary='Украина'
                                        secondary={
                                            <Typography component='span' variant='body2' color='textSecondary'>
                                                Твитов: 24 18
                                            </Typography>
                                        }/>
                                </ListItem>
                                <Divider component='li'/>
                            </List>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt='Аватар рекомендованного пользователя'
                                            src='https://yt3.ggpht.com/a/AATXAJzgimnbEJL4uu-O6gj1s1RdJM69v2Lsb4JmnQ0chQ=s900-c-k-c0xffffffff-no-rj-mo'/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary='RecommendedUser'
                                        secondary={
                                            <Typography component='span' variant='body2'>
                                                @RecommendedUser
                                            </Typography>
                                        }/>
                                    <Button color='primary'>
                                        <PersonAddIcon/>
                                    </Button>
                                </ListItem>
                                <Divider component='li'/>
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}