'use client';
import styles from "./Header.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    return (
        <header
            className={styles.container}
        >
            <button
                className={styles.logo}
                onClick={() => router.push('/')}
            >
                Logo
            </button>
            <SearchForm />
        </header>
    )
}

export default Header;
