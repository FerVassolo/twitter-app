import styles from './rightSideBar.module.scss';
import SearchBar from '../../../../components/searchBar/searchBar';
import Recommendations from './recomendations/recommendations';

export default function RightSideBar() {
    // const rightSideBarRef = useRef<HTMLDivElement>(null); // Especificamos que es un div
    // const fullContainerRef = useRef<HTMLDivElement>(null); // Especificamos que es un div
    // const [isStuck, setIsStuck] = useState(false);
    // const [isOutsideViewport, setIsOutsideViewport] = useState(true);
    //
    //
    // //
    // // This wasn't actually necesary now that I think about it. At least not for now...
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const rightSideBar = rightSideBarRef.current;
    //         const fullContainer = fullContainerRef.current;
    //         const viewportHeight = window.innerHeight;
    //
    //         if (rightSideBar !== null && fullContainer !== null) {
    //             const isOutsideViewport = (rightSideBar.clientHeight + 89) - viewportHeight < 0;
    //             if (isOutsideViewport) {
    //                 setIsOutsideViewport(false);
    //                 return;
    //             }
    //             const rightSideBarRect = rightSideBar.getBoundingClientRect();
    //
    //             const scrollY = window.scrollY;
    //
    //             if (scrollY - (rightSideBarRect.height + 89) + viewportHeight > 0) {
    //                 setIsStuck(true);
    //             } else {
    //                 setIsStuck(false);
    //             }
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div
            className={styles.container}
            // ref={fullContainerRef}
            // className={`${styles.container} ${isStuck ? styles.stuck : ''}`} // Añadir clase si está "fijo"
        >
            <div className={styles.searchBar}>
                <SearchBar placeholder={"Input"}/>
            </div>
            {/*{!isOutsideViewport &&*/}
                <div
                    className={styles.smallContainer}
                    // ref={rightSideBarRef}
                >
                    <Recommendations/>
                </div>

            {/*{isOutsideViewport &&*/}
            {/*<div*/}
            {/*    className={isStuck ? styles.stuckContainer : styles.innerContainer}*/}
            {/*    // ref={rightSideBarRef}*/}
            {/*>*/}
            {/*    <Recommendations/>*/}
            {/*</div>*/}

        </div>
    );
}
