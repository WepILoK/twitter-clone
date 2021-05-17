import React, {ReactElement, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

import Avatar from "@material-ui/core/Avatar/Avatar";
import TextareaAutosize from "@material-ui/core/TextareaAutosize/TextareaAutosize";
import Alert from '@material-ui/lab/Alert';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Button from "@material-ui/core/Button/Button";

import {useHomeStyles} from "../pages/Home/theme";
import {fetchAddTweet, setAddFormStatus} from "../store/ducks/tweets/actionCreators";
import {selectAddForm} from "../store/ducks/tweets/selectors";
import {AddFormStatus} from "../store/ducks/tweets/contracts/state";
import {UploadImages} from "./UploadImages";
import {uploadImage} from "../utils/uploadImage";


interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>
    maxRows?: number
}

export interface ImageObj {
    blobUrl: string
    file: File
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes, maxRows}): ReactElement => {
    const [text, setText] = useState<string>('')
    const [images, setImages] = useState<ImageObj[]>([])

    const dispatch = useDispatch()
    const addFormState = useSelector(selectAddForm)
    const textLimitPercent = Math.round((text.length / 280) * 100)


    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddTweet = async (): Promise<void> => {
        let result = []
        dispatch(setAddFormStatus(AddFormStatus.LOADING))
        for (let i = 0; i < images.length; i++) {
            const file = images[i].file
            const {url} = await uploadImage(file)
            result.push(url)
        }
        dispatch(fetchAddTweet({text, images: result}))
        setText('')
        setImages([])
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
                    <UploadImages images={images} onChangeImages={setImages}/>
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
                    <Button
                        onClick={handleClickAddTweet}
                        disabled={addFormState === AddFormStatus.LOADING || !text || text.length >= 280}
                        color='primary'
                        variant='contained'>
                        {addFormState === AddFormStatus.LOADING
                            ? <CircularProgress color='inherit' size={20}/>
                            : 'Твитнуть'}
                    </Button>
                </div>
            </div>
            {addFormState === AddFormStatus.ERROR &&
            <Alert severity='error'>Произошла ошибка при добавлении твита 😥</Alert>}
        </div>

    )
}