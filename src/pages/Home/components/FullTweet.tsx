import React, {ReactElement, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Tweet} from "../../../components/Tweet";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData, setTweetData} from "../../../store/ducks/tweet/actionCreators";
import {selectIsTweetLoading, selectTweetData} from "../../../store/ducks/tweet/selectors";
import {useHomeStyles} from "../theme";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    if(tweetData) {
        return <Tweet classes={classes} {...tweetData}/>
    }
    return null
}