import React, {ReactElement, useState} from "react";
import Avatar from "@material-ui/core/Avatar/Avatar";
import TextareaAutosize from "@material-ui/core/TextareaAutosize/TextareaAutosize";
import classNames from "classnames";
import {IconButton} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Button from "@material-ui/core/Button/Button";
import {useHomeStyles} from "../pages/Home/theme";

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>
    maxRows?: number
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes, maxRows}): ReactElement => {
    const [text, setText] = useState<string>('')

    const textLimitPercent = Math.round((text.length / 280) * 100)

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddTweet = (): void => {

        setText('')
    }

    return (
        <div>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt='Аватар пользователя'
                    src='https://photopict.ru/wp-content/uploads/2019/05/kartinki-dlya-stima-12.jpg'/>
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    value={text}
                    className={classes.addFormTextarea}
                    placeholder='Что происходит?'
                    rowsMax={maxRows}/>
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color='primary'>
                        <ImageIcon style={{fontSize: 26}}/>
                    </IconButton>
                    <IconButton color='primary'>
                        <EmojiIcon style={{fontSize: 26}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{280 - text.length}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress variant='static'
                                                  size={20}
                                                  thickness={5}
                                                  value={text.length >= 280 ? 100 : textLimitPercent}
                                                  style={text.length >= 280 ? {color: 'red'} : undefined}/>
                                <CircularProgress style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                                  variant='static'
                                                  size={20}
                                                  thickness={5}
                                                  value={100}/>
                            </div>
                        </>
                    )}
                    <Button onClick={handleClickAddTweet} disabled={text.length >= 280} color='primary'
                            variant='contained'>
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>

    )
}