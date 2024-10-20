import styles from './searchBar.module.scss';
import Typography from "../commons/typography/typography";

type SearchBarProps = {
    placeholder: string;
}

export default function SearchBar({placeholder}: SearchBarProps){
    return(
        <div className={styles.container}>
            <textarea placeholder={placeholder} />
        </div>
    )
}