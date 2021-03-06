import React, {ReactElement, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import {useHomeStyles} from "../pages/Home/theme";
import {selectIsTagsLoaded, selectTagsItems} from "../store/ducks/tags/selectors";
import {fetchTags} from "../store/ducks/tags/actionCreators";


interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const Tags: React.FC<TagsProps> = ({classes}): ReactElement | null => {
    const dispatch = useDispatch()
    const items = useSelector(selectTagsItems)
    const isLoaded = useSelector(selectIsTagsLoaded)

    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    if (!isLoaded) {
        return null
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {items.map(item =>
                    <div key={item._id}>
                        <ListItem className={classes.rightSideBlockItem}>
                            <Link to={`/home/search?q=${item.name}`}>
                                <ListItemText
                                    primary={item.name}
                                    secondary={
                                        <Typography component='span' variant='body2' color='textSecondary'>
                                            Твитов: {item.count}
                                        </Typography>
                                    }/>
                            </Link>
                        </ListItem>
                        <Divider component='li'/>
                    </div>)}
            </List>
        </Paper>

    )
}