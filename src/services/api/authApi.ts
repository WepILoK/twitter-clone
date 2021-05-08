import {axios} from "../../core/axios";
import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";

interface IResponse<T> {
    status: string
    data: T
}

export const AuthApi = {
    async signIn(postData: LoginFormProps): Promise<IResponse<any>> {
        const {data} = await axios.post<IResponse<IResponse<any>>>('/auth/login',
            {username: postData.email, password: postData.password})
        return data.data
    },
}