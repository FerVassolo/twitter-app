import styles from './tweetActions.module.scss';
import Typography from "../../commons/typography/typography";
import {useState} from "react";
import {likeTweet, retweetTweet} from "../../../api/api";

type TweetActionsProps = {
    tweetId: string,
    liked: boolean,
    retweeted: boolean,
    likes: number,
    retweets: number,
    comments: number
}

export default function TweetActions({tweetId, liked, retweeted, retweets, likes, comments}: TweetActionsProps){
    const [isLiked, setIsLiked] = useState(0);
    const [isRetweeted, setIsRetweeted] = useState(0);// Dunno how would I use this

    const likeIcon = isLiked ? "/icons/home/red-like.svg" : "/icons/home/like.svg";
    const retweetIcon = isRetweeted ? "/icons/home/blue-retweet.svg" : "/icons/home/retweet.svg";

    const handleLike = () => {
       if(isLiked === 0){
           setIsLiked(1);
           likeTweet(tweetId, true);
       }
       else {
          setIsLiked(0);
          likeTweet(tweetId, false);
       }

    }

    const handleRetweet = () => {
        if(isRetweeted === 0) {
            setIsRetweeted(1);
            retweetTweet(tweetId, true);
        }
        else {
            setIsRetweeted(0);
            retweetTweet(tweetId, false);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.comment}>
                <img src={"/icons/home/comment.svg"} alt={"Comment"}/>
                <Typography>{comments}</Typography>
            </div>
            <div className={isRetweeted ? styles.retweet : styles.noRetweet} onClick={handleRetweet} >
                <img src={retweetIcon} alt={"Retweet"}/>
                <Typography>{retweets + isRetweeted}</Typography>
            </div>
            <div className={isLiked ? styles.like : styles.noLike} onClick={handleLike}>
                <img src={likeIcon} alt={"Like"}/>
                <Typography>{likes + isLiked}</Typography>
            </div>
        </div>
    )
}