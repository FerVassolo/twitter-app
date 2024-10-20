import styles from './tweetActions.module.scss';
import Typography from "../../commons/typography/typography";
import {useState} from "react";

type TweetActionsProps = {
    tweetId: string,
    liked: boolean,
    retweeted: boolean,
    likes: number,
    retweets: number,
    comments: number
}

export default function TweetActions({tweetId, liked, retweeted, retweets, likes, comments}: TweetActionsProps){
    const [isLiked, setIsLiked] = useState(liked);
    const [isRetweeted, setIsRetweeted] = useState(retweeted);
    const [likesCount, setLikesCount] = useState(likes);
    const [retweetsCount, setRetweetsCount] = useState(retweets);
    const [commentCount, setCommentCount] = useState(comments); // Dunno how would I use this

    const likeIcon = isLiked ? "/icons/home/red-like.svg" : "/icons/home/like.svg";
    const retweetIcon = isRetweeted ? "/icons/home/blue-retweet.svg" : "/icons/home/retweet.svg";

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikesCount(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
    }

    const handleRetweet = () => {
        setIsRetweeted(!isRetweeted);
        setRetweetsCount(prevRetweets => isRetweeted ? prevRetweets - 1 : prevRetweets + 1);
    }

    return(
        <div className={styles.container}>
            <div className={styles.comment}>
                <img src={"/icons/home/comment.svg"} alt={"Comment"}/>
                <Typography>{commentCount}</Typography>
            </div>
            <div className={isRetweeted ? styles.retweet : styles.noRetweet} onClick={handleRetweet} >
                <img src={retweetIcon} alt={"Retweet"}/>
                <Typography>{retweetsCount}</Typography>
            </div>
            <div className={isLiked ? styles.like : styles.noLike} onClick={handleLike}>
                <img src={likeIcon} alt={"Like"}/>
                <Typography>{likesCount}</Typography>
            </div>
        </div>
    )
}