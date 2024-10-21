import styles from './tweetPage.module.scss';
import SideBar from "../../components/sidebar/sideBar";
import BottomBar from "../../components/bottomBar/bottomBar";
import TweetDetails from "../../components/tweetDetails/tweetDetails";
import RightSideBar from "../homePage/components/rightSideBar/rightSideBar";
import { useParams } from "react-router-dom";


export default function TweetPage() {
    const { id } = useParams<{ id: string }>();
    const tweetId = id ?? ""; // if id is undefined, set tweetId to empty string

    return (
        <div className={styles.App}>
            <div className={styles.innerContainer}>
                <div className={styles.sideBar}>
                    <SideBar />
                </div>
                <div className={styles.bottomBar}>
                    <BottomBar/>
                </div>
                <div className={styles.main}>
                    <TweetDetails tweetId={tweetId}/>
                </div>
            </div>
        </div>
    )

}