import styles from './newTweet.module.scss';
import ProfileImage from "../../../../../components/profileImage/profileImage";
import Typography from "../../../../../components/commons/typography/typography";
import Button from "../../../../../components/button/button";

export default function NewTweet(){
    return(
        <div className={styles.container}>
            <div className={styles.imageAndInput}>
                {/*ToDo: la imagen está mockeada. creo que el json no te dice. Pero mínimo mockea el llamado a la API*/}
                <ProfileImage src={"https://randomuser.me/api/portraits/women/25.jpg"} size={48} />
                {/*El typography de abajo en un futuro sería un nuevo componente llamado textfield.
                   Por el momento no lo veo necesario*/}
                <Typography className={styles.input} variant={"h6"}>What's Happening?</Typography>
            </div>
            <div className={styles.buttons}>
                <div className={styles.icons}>
                    <img src={"/icons/home/uploadImage.svg"} alt={"Upload"} />
                </div>
                <Button className={styles.tweetButton} variant={"light"}>Tweet</Button>
            </div>
        </div>
    )
}