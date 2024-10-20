import styles from './tabs.module.scss';
import Typography from "../../../../../components/commons/typography/typography";

export default function Tabs(){
    return(
        <div className={styles.container}>
            <div className={styles.tab}>
                <Typography className={styles.selectedText} fontWeight={"600"} fontSize={"15px"}>For you</Typography>
            </div>
            <div className={styles.tab}>
                    <Typography className={styles.unselectedText} fontWeight={"600"} fontSize={"15px"}>Following</Typography>
            </div>
        </div>
    )
}