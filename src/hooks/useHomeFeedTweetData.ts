import { useState, useEffect } from "react";
import { HomeFeedTweet } from "../types/api";
import tweets from "../api/tweets (1).json"; // Importar el archivo JSON

export default function useHomeFeedTweetData(tweetId: string) {
    const [tweet, setTweet] = useState<HomeFeedTweet>(
        {
            id: "",
            author: {
                id: "",
                firstName: "",
                lastName: "",
                username: "",
                profilePicture: "",
                private: false,
            },
            content: "",
            createdAt: "",
            likes: 0,
            commentsAmount: 0,
            retweets: 0,
            images: [],
            }
    );


    useEffect(() => {
        // Encontrar el tweet correspondiente al ID
        const foundTweet = tweets.find((tweet: any) => tweet.id === tweetId);
        if (foundTweet) {
            const formattedAuthor = {
                id: foundTweet.author.id,
                firstName: foundTweet.author.firstName,
                lastName: foundTweet.author.lastName,
                username: foundTweet.author.username,
                profilePicture: foundTweet.author.profilePicture,
                private: foundTweet.author.private,
            }
            const formattedTweet = {
                id: foundTweet.id,
                author: formattedAuthor,
                content: foundTweet.content,
                createdAt: foundTweet.createdAt,
                likes: foundTweet.reactions?.filter((r: any) => r.type?.toUpperCase() === "LOVE").length,
                retweets: foundTweet.reactions?.filter((r: any) => r.type?.toUpperCase() === "RETWEET").length,
                commentsAmount: foundTweet.comments?.length,
                images: foundTweet.images,
            };
            setTweet(formattedTweet);
        }
    }, [tweetId]);

    return tweet;
}
