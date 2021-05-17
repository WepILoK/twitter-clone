import React, {ReactElement, useCallback, useEffect, useRef} from "react";

import ImageIcon from "@material-ui/icons/ImageOutlined";
import {IconButton} from "@material-ui/core";

import {ImageObj} from "./AddTweetForm";
import {ImageList} from "./ImageList";


interface IUploadImagesProps {
    images: ImageObj[]
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}

export const UploadImages: React.FC<IUploadImagesProps> = ({images, onChangeImages}): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null)

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
            <ImageList images={images} removeImage={removeImage}/>
            <IconButton onClick={handleClickImage} color='primary'>
                <ImageIcon style={{fontSize: 26}}/>
            </IconButton>
            <input ref={inputRef} type='file' id='upload-input' hidden/>
        </div>
    )
}