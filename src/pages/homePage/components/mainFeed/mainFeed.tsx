import styles from './mainFeed.module.scss';
import Typography from "../../../../components/commons/typography/typography";
import Tabs from "./tabs/tabs";
import NewTweet from "./newTweet/newTweet";
import TweetsDisplay from "./tweetsDisplay/tweetsDisplay";
import ProfileImage from "../../../../components/profileImage/profileImage";
import {useEffect, useState} from "react";
import {getUserImage} from "../../../../api/api";

export default function MainFeed(){
    const [image, setImage] = useState<string>("");


    useEffect(()=> {
        getUserImage().then((image) => setImage(image))
    },[])


    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.responsiveTitle}>
                    <ProfileImage src={image} size={48}/>
                    <img
                        className={styles.image}
                        alt={"Twitter Logo"}
                        src={"https://s3-alpha-sig.figma.com/img/fd76/7359/5f8b7553779efcb31138012a7edf34ca?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GvR-C0sIW02XZUMyaCaBNl3u5mfywzsg9e0Ndp6sfHGSWRx-wAnaGUnBZICb0amUfbUmAPim74TPDPQyVlBZb9ne1sSIwVrmSnPf2i4BhmtdQSXbM3hp58b0kGHnuUzWlY23CWzU9RuEG6ukhnPQDzvlrXheCYfC6twB-Z~KXVy6vfkT2xSnrXXZPQsxgfU76P29TJqCtSiiXSwooNZokSYKjRvpAQxAEOJ76Za9BHlZZ-5IEOynaT2UJnzbAdoMJqYcLfygDuE8jBeKDZ7ed96sN17gRwQgTWvdzgHvzs1DfpT2lUpVVphcc4bGfqEUHToVqXQyB1BnoIZF7ABG3A__"}/>
                    <div className={styles.emptyDiv}></div>
                </div>
                <Typography className={styles.pageName} variant={"h5"}>Home</Typography>
                <Tabs/>
            </div>

            <div className={styles.innerContainer}>
                <div className={styles.newTweet}>
                    <NewTweet image={image}/>
                </div>
                <TweetsDisplay/>
            </div>

        </div>
    )
}