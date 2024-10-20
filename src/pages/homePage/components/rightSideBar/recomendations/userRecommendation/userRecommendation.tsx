import styles from './userRecommendation.module.scss';
import ProfileImage from "../../../../../../components/profileImage/profileImage";
import Typography from "../../../../../../components/commons/typography/typography";
import Button from "../../../../../../components/button/button";
export default function UserRecommendation() {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <ProfileImage src={"https://randomuser.me/api/portraits/women/25.jpg"} size={48}/>
                <div className={styles.username}>
                    <Typography fontSize={"15px"} fontWeight={"600"}>Username</Typography>
                    <Typography className={styles.atName}>@username</Typography>
                </div>
            </div>
            <div className={styles.button}>
                <Button variant={"black"}>Button</Button>
            </div>
        </div>
    )
}