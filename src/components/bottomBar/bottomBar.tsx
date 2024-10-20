import styles from './bottomBar.module.scss';
import NavItemIcon from "../navItemIcon/navItemIcon";
import Button from "../button/button";

export default function BottomBar(){
    return(
        <div className={styles.container}>
            <div className={styles.icons}>
                <NavItemIcon icon={"/icons/sideBar/home.svg"} filledIcon={"/icons/sideBar/home-hover.svg"}
                             isSelected={true}/>
                <NavItemIcon icon={"/icons/sideBar/explore.svg"} filledIcon={"/icons/sideBar/explore-hover.svg"}
                              isSelected={false}/>
                <NavItemIcon icon={"/icons/sideBar/message.svg"} filledIcon={"/icons/sideBar/message-hover.svg"}
                             isSelected={false}/>
                <NavItemIcon icon={"/icons/sideBar/profile.svg"} filledIcon={"/icons/sideBar/profile-hover.svg"}
                              isSelected={false}/>
            </div>
        </div>
    )
}