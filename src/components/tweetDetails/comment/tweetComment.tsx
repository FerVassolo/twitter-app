import {Comment, FullTweet} from "../../../types/api";
import styles from "../../tweet/tweet.module.scss";
import TweetUser from "../../tweet/tweetUser/tweetUser";
import TweetContent from "../../tweet/tweetContent/tweetContent";
import TweetActions from "../../tweet/tweetActions/tweetActions";

type CommentProps = {
    comment: Comment;
}

// Many of the data used here is mocked because they dont exist on the JSON
export default function TweetComment({comment}: CommentProps){

    return(
        <div className={styles.container}>
            <TweetUser author={comment.author} date={"15 feb"}/>
            <div className={styles.content}>
                <TweetContent
                    text={comment.content}
                    image={""}
                />
            </div>
            <div className={styles.actions}>
                <TweetActions
                    tweetId={""}
                    liked={false}
                    retweeted={false}
                    likes={1}
                    retweets={2}
                    comments={0}
                />
            </div>
        </div>
    )
}