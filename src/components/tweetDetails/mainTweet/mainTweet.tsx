import styles from "./mainTweet.module.scss";
import TweetContent from "../../tweet/tweetContent/tweetContent";
import TweetActions from "../../tweet/tweetActions/tweetActions";
import {useEffect} from "react";
import TweetUser from "../tweetUser/tweetUser";
import Typography from "../../commons/typography/typography";
import {FullTweet} from "../../../types/api";

type MainTweetProps = {
    data: FullTweet;
}

export default function MainTweet({data}: MainTweetProps){

    function formatDate(dateString: string): string {
        const date = new Date(dateString);

        const hours = date.getHours() % 12 || 12; // Formato de 12 horas
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        return `${hours}:${minutes} ${ampm} ${formattedDate}`;
    }

    useEffect(() => {
        console.log(data);
    }, []);

    return(
        <div className={styles.container}>
            <TweetUser  author={data.author} date={data.createdAt} />
            <div className={styles.content}>
                <TweetContent
                    text={data.content}
                    image={data.images[0]}
                />
            </div>
            <Typography className={styles.date}>{formatDate(data.createdAt)}</Typography>
            <div className={styles.actions}>
                <TweetActions
                    tweetId={data.id}
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