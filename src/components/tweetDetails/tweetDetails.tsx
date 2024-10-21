import styles from "./tweetDetails.module.scss";
import Typography from "../commons/typography/typography";
import MainTweet from "./mainTweet/mainTweet";
import NewTweet from "../newTweet/newTweet";
import {useEffect, useState} from "react";
import {getUserImage} from "../../api/api";
import useFullTweetData from "../../hooks/useFullTweetData";
import TweetComment from "./comment/tweetComment";

type TweetDetailsProps = {
    tweetId: string;
}

export default function TweetDetails({tweetId}: TweetDetailsProps){
    const data = useFullTweetData(tweetId);
    const [image, setImage] = useState<string>("");

    useEffect(()=> {
        getUserImage().then((image) => setImage(image))
    },[])

    return(
        <div className={styles.container}>
            <Typography className={styles.pageName} variant={"h5"}>Tweet</Typography>
            <MainTweet data={data}/>
            <NewTweet image={image}/>
            {data.comments.map((comment) => (
                <TweetComment comment={comment}/>
            ))}
        </div>

    )
}