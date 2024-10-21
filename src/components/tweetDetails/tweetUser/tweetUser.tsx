import styles from "./tweetUser.module.scss";
import ProfileImage from "../../profileImage/profileImage";
import Typography from "../../commons/typography/typography";
import {Author} from "../../../types/api";

type TweetUserProps = {
    author: Author,
    date: string
}

export default function TweetUser({author, date}: TweetUserProps){

    return(
        <div className={styles.user}>
            <ProfileImage src={author.profilePicture} size={48}/>
            <div className={styles.username}>
                <Typography fontWeight={"600"}>{author.firstName} {author.lastName}</Typography>
                <div className={styles.atName}>
                    <Typography>@{author.username}</Typography>
                </div>
            </div>
        </div>
    )
}