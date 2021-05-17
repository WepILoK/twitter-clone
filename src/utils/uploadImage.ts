import {axios} from "../core/axios";

interface IUploadImageReturn {
    height: number
    size: number
    url: string
    width: number
}

export const uploadImage = async (image: File): Promise<IUploadImageReturn> => {
    const formData = new FormData()
    formData.append('image', image)
    const {data} = await axios.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return data
}