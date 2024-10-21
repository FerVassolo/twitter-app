import styles from './tweetsDisplay.module.scss';
import Tweet from "../../../../../components/tweet/tweet";
import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {getTweetsByRange} from "../../../../../api/api";


export default function TweetsDisplay(){

    // este metodo solo agarra los ids.
    const [items, setItems] = useState<string[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(2);
    const [start, setStart] = useState(0);
    const amount = 5;

    useEffect(()=> {
        getTweetsByRange(start, start + amount).then((items) => setItems(items));
        setStart(start + amount);
    },[])

    const fetchMoreData = () => {
        // console.log(items)
        getTweetsByRange(start, start + amount)
            .then((newItems) => {
                if (newItems.length === 0) {
                    setHasMore(false);
                } else {
                    setItems((prevItems) => [...prevItems, ...newItems]);
                    setStart(start + amount);
                }
            })
            .catch((err) => console.log(err));
    };

    return(
        <InfiniteScroll next={fetchMoreData} hasMore={hasMore} loader={<div></div>} dataLength={items.length}>
            <div className={styles.container}>
                {items.map((tweetId) => (
                    <Tweet key={tweetId} tweetId={tweetId} />
                ))}
            </div>
        </InfiniteScroll>
    )
}