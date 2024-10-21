import styles from './tweet.module.scss';
import TweetActions from "./tweetActions/tweetActions";
import TweetUser from "./tweetUser/tweetUser";
import TweetContent from "./tweetContent/tweetContent";
import {useNavigate} from "react-router-dom";
import useHomeFeedTweetData from "../../hooks/useHomeFeedTweetData";

type TweetProps = {
    tweetId: string;
}

export default function Tweet({tweetId}: TweetProps){
    const data = useHomeFeedTweetData(tweetId);
    const navigate = useNavigate();
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Evitar que se navegue si se hace clic en acciones (como los botones)
        if ((e.target as HTMLElement).closest(`.${styles.actions}`)) {
            return;
        }
        navigate(`/tweet/${tweetId}`);
    };

    return(
        <div className={styles.container} onClick={handleClick}>
            <TweetUser author={data.author} date={data.createdAt} />
            <div className={styles.content}>
                <TweetContent
                    text={data.content}
                    image={data.images[0]}
                />
            </div>
            <div className={styles.actions}>
                <TweetActions
                    tweetId={tweetId}
                    liked={false}
                    retweeted={false}
                    likes={data.likes}
                    retweets={data.retweets}
                    comments={data.commentsAmount}
                />
            </div>
        </div>
    )
}