import { useState, useEffect } from "react";
import { FullTweet, Comment } from "../types/api";
import tweets from "../api/tweets (1).json";
import useHomeFeedTweetData from "./useHomeFeedTweetData";

export default function useFullTweetData(tweetId: string) {
    const [fullTweet, setFullTweet] = useState<FullTweet>(
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
            comments: [],
        }
    );

    const tweet = useHomeFeedTweetData(tweetId);

    useEffect(() => {
        if (tweet && tweetId) {
            const foundTweet = tweets.find((t: any) => t.id === tweetId);

            if (foundTweet) {
                const comments: Comment[] = foundTweet.comments?.map((comment: any) => ({
                    id: comment.id,
                    author: {
                        id: comment.author.id,
                        firstName: comment.author.firstName,
                        lastName: comment.author.lastName,
                        username: comment.author.username,
                        profilePicture: comment.author.profilePicture,
                        private: comment.author.private,
                    },
                    content: comment.content,
                })) || [];

                // Creamos el objeto fullTweet con el tweet principal y los comentarios
                const formattedFullTweet: FullTweet = {
                    ...tweet,
                    comments,
                };

                setFullTweet(formattedFullTweet);
            }
        }
    }, [tweet, tweetId]);

    return fullTweet;
}
