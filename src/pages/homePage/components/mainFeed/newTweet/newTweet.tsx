import styles from './newTweet.module.scss';
import ProfileImage from "../../../../../components/profileImage/profileImage";
import Typography from "../../../../../components/commons/typography/typography";
import Button from "../../../../../components/button/button";

type NewTweetProps = {
    image: string,
}

export default function NewTweet({image}: NewTweetProps){
    return(
        <div className={styles.container}>
            <div className={styles.imageAndInput}>
                {/* La imagen está mockeada porque en el JSON no existe*/}
                <ProfileImage src={image} size={48} />
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