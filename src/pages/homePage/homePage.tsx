import styles from './homePage.module.scss';
import SideBar from "../../components/sidebar/sideBar";
import MainFeed from "./components/mainFeed/mainFeed";

export default function HomePage() {
    return (
        <div className={styles.App}>
            <SideBar />
            <div className={styles.main}>
                <MainFeed></MainFeed>
            </div>
        </div>
    )

}