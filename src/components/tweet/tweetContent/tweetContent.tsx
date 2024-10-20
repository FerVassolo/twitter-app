import Typography from "../../commons/typography/typography";
import styles from './tweetContent.module.scss';

type TweetContentProps = {
    text?: string;
    image?: string;
}

export default function TweetContent({text = "", image = ""}: TweetContentProps){

    return(
        <div className={styles.container}>
            {text !== "" &&
                <Typography fontWeight={"400"}>{text}</Typography>
            }
            {image !== "" &&
                <img src={image} alt="tweet photo" className={styles.image}/>
            }
        </div>
    )
}
