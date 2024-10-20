import styles from './navItemIcon.module.scss';
import Typography from "../commons/typography/typography";

type ItemIconProps = {
    icon: string;
    filledIcon: string;
    text?: string;
    isSelected: boolean
}


export default function NavItemIcon(
    { icon, filledIcon, text="", isSelected} : ItemIconProps)
{
    return(
        <div className={styles.container}>
            {isSelected && (
                <div className={styles.button}>
                    <img width={24} height={24} src={filledIcon} alt={"Icon"} />
                    <Typography className={styles.selectedText} variant={"h5"}>{text}</Typography>
                </div>
            )}
            {!isSelected && (
                <div className={styles.button}>
                    <img src={icon} alt={"Icon"}/>
                    <Typography className={styles.unselectedText} fontSize={"20"} fontWeight={"400"}>{text}</Typography>
                </div>
            )}

        </div>
    )
}