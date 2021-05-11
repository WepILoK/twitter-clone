import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import Divider from "@material-ui/core/Divider";
import React, {ReactElement} from "react";
import {useHomeStyles} from "../pages/Home/theme";
import {useSelector} from "react-redux";
import {selectUsersItems} from "../store/ducks/users/selectors";

export const Users: React.FC = (): ReactElement => {
    const classes = useHomeStyles()
    const items = useSelector(selectUsersItems)

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Кого читать</b>
            </Paper>
            <List>
                {items.map(obj => (
                    <ListItem className={classes.rightSideBlockItem}>
                        <ListItemAvatar>
                            <Avatar alt={'Аватар ' + obj.fullName}
                                    src='https://pbs.twimg.com/profile_images/913636623300141056/58jmo4Ok.jpg'/>
                        </ListItemAvatar>
                        <ListItemText
                            primary='Dock of Shame'
                            secondary={
                                <Typography component='span' variant='body2' color='textSecondary'>
                                    @FayDockOfShame
                                </Typography>}
                        />
                        <Button color='primary'>
                            <PersonAddIcon/>
                        </Button>
                    </ListItem>
                ))}
                <Divider component='li'/>
            </List>
        </Paper>
    )
}