import React from "react";

import {IconButton} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/CloseOutlined";

import {useHomeStyles} from "../pages/Home/theme";
import {ImageObj} from "./AddTweetForm";


interface InImageList {
    images: ImageObj[]
    removeImage?: (url: string) => void
}

export const ImageList: React.FC<InImageList> = ({images, removeImage}) => {
    const classes = useHomeStyles()

    if (!images.length) {
        return null
    }

    return (
        <div className={classes.imagesList}>
            {images.map(obj =>
                <div key={obj.blobUrl} className={classes.imagesListItem}
                     style={{backgroundImage: `url(${obj.blobUrl})`}}>
                    {removeImage &&
                    <IconButton className={classes.imagesListItemRemove}
                                                onClick={(): void => removeImage(obj.blobUrl)}>
                        <RemoveIcon style={{fontSize: 15}}/>
                    </IconButton>}
                </div>)}
        </div>
    )
}