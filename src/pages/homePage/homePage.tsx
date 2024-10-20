import styles from './homePage.module.scss';
import SideBar from "../../components/sidebar/sideBar";
import MainFeed from "./components/mainFeed/mainFeed";
import RightSideBar from "./components/rightSideBar/rightSideBar";
import BottomBar from "../../components/bottomBar/bottomBar";

export default function HomePage() {
    return (
        <div className={styles.App}>
            <div className={styles.innerContainer}>
                <div className={styles.sideBar}>
                    <SideBar />
                </div>
                <div className={styles.bottomBar}>
                    <BottomBar/>
                    <img className={styles.logoButton} src={"/icons/home/newTweet.svg"} alt={"New Tweet"}/>
                </div>
                <div className={styles.main}>
                    <MainFeed></MainFeed>
                    <div className={styles.right}>
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </div>
    )

}