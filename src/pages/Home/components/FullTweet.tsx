import React, {ReactElement, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import ruLang from 'date-fns/locale/ru'
import format from 'date-fns/format'

import {Avatar, Paper, Typography} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import {fetchTweetData, setTweetData} from "../../../store/ducks/tweet/actionCreators";
import {selectIsTweetLoading, selectTweetData} from "../../../store/ducks/tweet/selectors";
import {useHomeStyles} from "../theme";


export const FullTweet: React.FC = (): ReactElement | null => {
    const dispatch = useDispatch()
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading)
    const params: { id: string } = useParams();
    const classes = useHomeStyles()
    const id = params.id

    useEffect(() => {
        dispatch(fetchTweetData(id))

        return () => {
            dispatch(setTweetData(undefined))
        }
    }, [dispatch, id])

    if (isLoading) {
        return (
            <div className={classes.tweetsCentered}>
                <CircularProgress/>
            </div>
        )
    }
    if (tweetData) {
        return (
            <Paper className={classes.fullTweet}>
                <div className={classNames(classes.tweetsHeaderUser)}>
                    <Avatar className={classes.tweetAvatar} alt={`Аватар пользователя ${tweetData.user.fullName}`}
                            src={tweetData.user.avatarUrl}/>
                    <Typography>
                        <b>{tweetData.user.fullName}</b>&nbsp;
                        <div>
                            <span className={classes.tweetUserName}>@{tweetData.user.userName}</span>&nbsp;
                            <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'H:mm', {locale: ruLang})} · </span>
                            <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'dd MMM. yyyy г.', {locale: ruLang})}</span>
                        </div>
                    </Typography>
                </div>
                <Typography className={classes.fullTweetText} gutterBottom>
                    {tweetData.text}
                </Typography>
            </Paper>
        )
    }
    return null
}