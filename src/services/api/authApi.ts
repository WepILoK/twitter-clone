import {axios} from "../../core/axios";
import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";
import {IRegisterFormProps} from "../../pages/SignIn/components/RegisterModal";
import {IUser} from "../../store/ducks/user/contracts/state";

interface IResponse<T> {
    status: string
    data: T
}

export const AuthApi = {
    async signIn(postData: LoginFormProps): Promise<IResponse<any>> {
        const {data} = await axios.post<IResponse<any>>('/auth/login',
            {username: postData.email, password: postData.password})
        return data.data
    },
    async signUp(postData: IRegisterFormProps): Promise<IResponse<IUser>> {
        const {data} = await axios.post<IResponse<IUser>>('/auth/register',
            {userName: postData.userName,
                email: postData.email,
                fullName: postData.fullName,
                password: postData.password,
                password2: postData.password2
            })
        return data
    },
    async getMe() {
        const {data} = await axios.get('/users/me')
        return data
    },
}
