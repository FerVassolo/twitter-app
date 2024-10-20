import styles from './tweet.module.scss';
import ProfileImage from "../profileImage/profileImage";
import Typography from "../commons/typography/typography";
import TweetActions from "./tweetActions/tweetActions";
import TweetUser from "./tweetUser/tweetUser";
import TweetContent from "./tweetContent/tweetContent";

type TweetProps = {
    tweetId: string;
}

export default function Tweet({tweetId}: TweetProps){
    return(
        <div className={styles.container}>
            <TweetUser />
            <div className={styles.content}>
                <TweetContent
                    text={"Yesterday I took my dog for a walk and suddenly it started to rain :(Luckily my dog enjoyed it"}
                    // image={"https://random.imagecdn.app/800/600"}
                />
            </div>
            <div className={styles.actions}>
                <TweetActions
                    tweetId={tweetId}
                    liked={false}
                    retweeted={false}
                    likes={6}
                    retweets={12}
                    comments={6}
                />
            </div>
        </div>
    )
}