import styles from './recomendations.module.scss';
import Typography from "../../../../../components/commons/typography/typography";
import UserRecommendation from "./userRecommendation/userRecommendation";

export default function Recommendations(){
    return(
        <div className={styles.container}>
            <Typography variant={"h6"}>Who to follow</Typography>
            <UserRecommendation />
            <UserRecommendation />
            <UserRecommendation />
            <UserRecommendation />
            <UserRecommendation />
            <p className={styles.showMore}>Show more</p>
        </div>
    )
}