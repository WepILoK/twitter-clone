import {axios} from "../../core/axios";
import {Tweet} from "../../store/ducks/tweets/contracts/state";

interface IResponse<T> {
    status: string
    data: T
}

export const TweetsApi = {
    async fetchTweets(): Promise<Tweet[]> {
        const {data} = await axios.get<IResponse<Tweet[]>>('/tweets')
        return data.data
    },
    async fetchTweetData(id: string): Promise<Tweet> {
        const {data} = await axios.get<IResponse<Tweet>>('/tweets/' + id)
        return data.data
    },
    async addTweet(payload: {text: string, images: string[]}): Promise<Tweet> {
        const {data} = await axios.post<IResponse<Tweet>>('/tweets', payload)
        return data.data
    },

}