import styles from './sideBar.module.scss';
import NavItemIcon from "./components/navItemIcon/navItemIcon";
import Button from "../button/button";

export default function SideBar(){
    return(
        <div className={styles.container}>
            {/*Podrías extrapolar el Logo.*/}
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    alt={"Twitter Logo"}
                    src={"https://s3-alpha-sig.figma.com/img/fd76/7359/5f8b7553779efcb31138012a7edf34ca?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GvR-C0sIW02XZUMyaCaBNl3u5mfywzsg9e0Ndp6sfHGSWRx-wAnaGUnBZICb0amUfbUmAPim74TPDPQyVlBZb9ne1sSIwVrmSnPf2i4BhmtdQSXbM3hp58b0kGHnuUzWlY23CWzU9RuEG6ukhnPQDzvlrXheCYfC6twB-Z~KXVy6vfkT2xSnrXXZPQsxgfU76P29TJqCtSiiXSwooNZokSYKjRvpAQxAEOJ76Za9BHlZZ-5IEOynaT2UJnzbAdoMJqYcLfygDuE8jBeKDZ7ed96sN17gRwQgTWvdzgHvzs1DfpT2lUpVVphcc4bGfqEUHToVqXQyB1BnoIZF7ABG3A__"}/>
            </div>
            <div>
                <NavItemIcon icon={"/icons/sideBar/home.svg"} filledIcon={"/icons/sideBar/home-hover.svg"} text={"Home"} isSelected={true} />
                <NavItemIcon icon={"/icons/sideBar/explore.svg"} filledIcon={"/icons/sideBar/explore-hover.svg"} text={"Explore"} isSelected={false} />
                <NavItemIcon icon={"/icons/sideBar/message.svg"} filledIcon={"/icons/sideBar/message-hover.svg"} text={"Message"} isSelected={false} />
                <NavItemIcon icon={"/icons/sideBar/profile.svg"} filledIcon={"/icons/sideBar/profile-hover.svg"} text={"Profile"} isSelected={false} />
            </div>
            <Button>Tweet</Button>
        </div>
    )
}