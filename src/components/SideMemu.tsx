import React, {ReactElement, useState} from "react";
import {Link} from "react-router-dom";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MessageIcon from "@material-ui/icons/MailOutline";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/ListAlt";
import UserIcon from "@material-ui/icons/PermIdentity";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import {useHomeStyles} from "../pages/Home/theme";
import {AddTweetForm} from "./AddTweetForm";
import {ModalBlock} from "./ModalBlock";


interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}): ReactElement => {
    const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)

    const toggleAddTweet = () => {
        setVisibleAddTweet(!visibleAddTweet)
    }

    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <Link to='/home'>
                    <IconButton className={classes.logo} aria-label='' color='primary'>
                        <TwitterIcon className={classes.logoIcon}/>
                    </IconButton>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <Link to='/home'>
                    <div>
                        <HomeIcon className={classes.sideMenuListItemIcon} color='primary'/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Главная</Typography>
                        </Hidden>
                    </div>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MessageIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button onClick={toggleAddTweet} className={classes.sideMenuTweetButton} variant='contained'
                        color='primary' fullWidth>
                    <Hidden smDown>
                        Твитнуть
                    </Hidden>
                    <Hidden mdUp>
                        <CreateIcon/>
                    </Hidden>
                </Button>
                <ModalBlock onClose={toggleAddTweet} visible={visibleAddTweet}>
                    <div style={{width: 550}}>
                        <AddTweetForm maxRows={15} classes={classes}/>
                    </div>
                </ModalBlock>
            </li>
        </ul>
        // <UserSideProfile/>
    )
}