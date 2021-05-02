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
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import {Tags} from "../../components/Tags";
import { Route } from "react-router-dom";
import {BackButton} from "../../components/BackButton";
import {FullTweet} from "./components/FullTweet";


export const Home: React.FC = (): ReactElement => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
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
                            <Route path='/home/:any'>
                                <BackButton classes={classes}/>
                            </Route>
                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant='h6'>Твиты</Typography>
                            </Route>
                            <Route path='/home/tweet'>
                                <Typography variant='h6'>Твитнуть</Typography>
                            </Route>
                        </Paper>

                        <Route path={['/home', '/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes}/>
                                </div>
                                <div className={classes.addFormBottomLine}/>
                            </Paper>
                        </Route>

                        <Route path='/home' exact>
                            {isLoading
                                ? <div className={classes.tweetsCentered}>
                                    <CircularProgress/>
                                </div>
                                : tweets.map(tweet =>
                                    <Tweet key={tweet._id} {...tweet} classes={classes}/>
                                )}
                        </Route>

                        <Route path='/home/tweet/:id' component={FullTweet} exact/>

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
                        <Tags classes={classes}/>
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