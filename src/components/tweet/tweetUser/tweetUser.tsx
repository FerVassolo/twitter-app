import styles from "./tweetUser.module.scss";
import ProfileImage from "../../profileImage/profileImage";
import Typography from "../../commons/typography/typography";

export default function TweetUser(){
    return(
        <div className={styles.user}>
            {/*ToDo: Mocked*/}
            <ProfileImage src={"https://randomuser.me/api/portraits/women/25.jpg"} size={48}/>
            <div className={styles.username}>
                <Typography fontWeight={"600"}>Username</Typography>
                <div className={styles.atName}>
                    <Typography>@username</Typography>
                    <img src={"/icons/home/gray-divisor.svg"} alt={"Divisor"}/>
                    <Typography>date</Typography>
                </div>
            </div>
        </div>
    )
}