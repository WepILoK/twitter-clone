import React, {ReactElement, useEffect} from "react";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { Paper,Typography} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import {useHomeStyles} from "./theme";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {AddTweetForm} from "../../components/AddTweetForm";
import {Tweet} from "../../components/Tweet";
import {BackButton} from "../../components/BackButton";
import {FullTweet} from "./components/FullTweet";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";


export const Home: React.FC = (): ReactElement => {
    const dispatch = useDispatch()
    const classes = useHomeStyles()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    useEffect(() => {
        dispatch(fetchTweets())
    }, [dispatch])

    return (
        <Paper className={classes.tweetsWrapper} variant='outlined'>
            <Paper className={classes.tweetsHeader} variant='outlined'>
                <Route path='/home/:any'>
                    <BackButton/>
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
    )
}