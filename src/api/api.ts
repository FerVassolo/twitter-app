import tweets from './tweets (1).json';

export const getUserImage = async (): Promise<string> => {
    const response = "https://randomuser.me/api/portraits/women/25.jpg";
    return response;
}


export const getTweetsByRange = async (start: number, end:number): Promise<string[]> => {
    // Obtiene los primeros 'n' tweets y mapea para devolver solo los IDs
    const ids = tweets.slice(start, end).map(tweet => tweet.id);
    return ids;
}

// si state es true el usuario le dio like al tweet; si es false se lo quitó
export const likeTweet = async (tweetId: string, state: boolean): Promise<void> => {

}

export const retweetTweet = async (tweetId: string,  state: boolean): Promise<void> => {

}