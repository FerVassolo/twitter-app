import styles from './mainFeed.module.scss';
import Typography from "../../../../components/commons/typography/typography";
import Tabs from "../tabs/tabs";
import NewTweet from "../newTweet/newTweet";

export default function MainFeed(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Typography variant={"h5"}>Home</Typography>
            </div>
            <Tabs />
            <NewTweet/>

        </div>
    )
}