import ImageIcon from "@material-ui/icons/ImageOutlined";
import {IconButton} from "@material-ui/core";
import React, {ReactElement, useCallback, useEffect, useRef, useState} from "react";
import {useHomeStyles} from "../pages/Home/theme";
import RemoveIcon from '@material-ui/icons/CloseOutlined';
import {ImageObj} from "./AddTweetForm";


interface IUploadImagesProps {
    images: ImageObj[]
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}

export const UploadImages: React.FC<IUploadImagesProps> = ({images, onChangeImages}): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null)
    const classes = useHomeStyles()

    const handleClickImage = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const removeImage = (url: string) => {
        onChangeImages(prev => prev.filter((obj) => obj.blobUrl !== url))
    }

    const handleChangeFileInput = useCallback((event: Event) => {
        if (event.target) {
            const target = (event.target as HTMLInputElement)
            const file = target.files?.[0]
            if (file) {
                const fileObj = new Blob([file])
                onChangeImages(prev => [...prev, {
                    blobUrl: URL.createObjectURL(fileObj),
                    file
                }])
            }
        }
    }, [])

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('change', handleChangeFileInput)
        }
        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener('change', handleChangeFileInput)
            }
        }
    }, [])

    return (
        <div>
            <input ref={inputRef} type='file' id='upload-input' hidden/>
            <div className={classes.imagesList}>
                {images.map(obj =>
                    <div key={obj.blobUrl} className={classes.imagesListItem} style={{backgroundImage: `url(${obj.blobUrl})`}}>
                        <IconButton className={classes.imagesListItemRemove} onClick={(): void => removeImage(obj.blobUrl)} color='primary'>
                            <RemoveIcon style={{fontSize: 15}}/>
                        </IconButton>
                    </div>)}
            </div>
            <IconButton onClick={handleClickImage} color='primary'>
                <ImageIcon style={{fontSize: 26}}/>
            </IconButton>
        </div>
    )
}