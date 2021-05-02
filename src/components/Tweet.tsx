import React, {ReactElement} from "react";
import classNames from "classnames";
import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ModeCommentOutlined";
import RepostIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";

import {useHomeStyles} from "../pages/Home/theme";
import {Link} from "react-router-dom";

interface TweetProps {
    _id: string
    classes: ReturnType<typeof useHomeStyles>
    text: string
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export const Tweet: React.FC<TweetProps> = ({classes, user, text, _id}): ReactElement => {
    return (
        <Link to={`/home/tweet/${_id}`} className={classes.tweetWrapper}>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
                <Avatar className={classes.tweetAvatar} alt={`Аватар пользователя ${user.fullName}`}
                        src={user.avatarUrl}/>
                <div>
                    <Typography>
                        <b>{user.fullName}</b>&nbsp;
                        <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
                        <span className={classes.tweetUserName}>-</span>&nbsp;
                        <span className={classes.tweetUserName}>1 ч</span>
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton>
                                <CommentIcon style={{fontSize: 20}}/>
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <RepostIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <LikeIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <ShareIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Paper>
        </Link>
    )
}