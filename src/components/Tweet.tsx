import React, {ReactElement, useState} from "react";
import {useHistory} from 'react-router'
import classNames from "classnames";
import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ModeCommentOutlined";
import RepostIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {useHomeStyles} from "../pages/Home/theme";
import {formatDate} from "../utils/formatDate";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

interface TweetProps {
    _id: string
    classes: ReturnType<typeof useHomeStyles>
    text: string
    createdAt: string
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export const Tweet: React.FC<TweetProps> = ({classes, user, text, _id, createdAt}): ReactElement => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const history = useHistory()

    const handleClickTweet = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault()
        history.push(`/home/tweet/${_id}`)
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        e.preventDefault()
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }


    return (
        <a onClick={handleClickTweet} href={`/home/tweet/${_id}`} className={classes.tweetWrapper}>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
                <Avatar className={classes.tweetAvatar} alt={`Аватар пользователя ${user.fullName}`}
                        src={user.avatarUrl}/>
                <div className={classes.tweetContent}>
                    <div className={classes.tweetHeader}>
                        <div>
                            <b>{user.fullName}</b>&nbsp;
                            <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
                        </div>
                        <div>
                            <IconButton aria-label='more' aria-controls='long-menu'
                                        aria-haspopup='true' onClick={handleClick}>
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                id='long-menu'
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}>
                                <MenuItem onClick={handleClose}>
                                    Редактировать твит
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Удалить твит
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
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
        </a>
    )
}