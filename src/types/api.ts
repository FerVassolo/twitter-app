
export type HomeFeedTweet = {
    id: string,
    author: Author,
    content?: string,
    createdAt: string,
    likes: number,
    commentsAmount: number,
    retweets: number,
    images: string[],
}

export type Author = {
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    profilePicture: string,
    private: boolean
}

export type FullTweet = HomeFeedTweet & {
    comments: Comment[]
}

// COMMENTS no tiene likes ni retweets ni date en el json
export type Comment ={
    id: string,
    author: Author,
    content: string,
}