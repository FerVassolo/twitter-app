import styles from "./tweetUser.module.scss";
import ProfileImage from "../../profileImage/profileImage";
import Typography from "../../commons/typography/typography";
import {Author} from "../../../types/api";

type TweetUserProps = {
    author: Author,
    date: string
}

export default function TweetUser({author, date}: TweetUserProps){

    function formatDate(dateString: string): string {
        const date = new Date(dateString);

        // En caso que la fecha no sea válida, por cualquiersea la razón
        if (isNaN(date.getTime())) {
            return "";
        }

        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'short',
        };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
    }

    return(
        <div className={styles.user}>
            <ProfileImage src={author.profilePicture} size={48}/>
            <div className={styles.username}>
                <Typography fontWeight={"600"}>{author.firstName} {author.lastName}</Typography>
                <div className={styles.atName}>
                    <Typography>@{author.username}</Typography>
                    <img src={"/icons/home/gray-divisor.svg"} alt={"Divisor"}/>
                    <Typography>{formatDate(date)}</Typography>
                </div>
            </div>
        </div>
    )
}