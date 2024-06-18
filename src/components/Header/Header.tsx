'use client';
import styles from "./Header.module.scss";
import SearchForm from "../SearchForm";
import Link from "next/link";
import Image from "next/image";
import hands from '@/../public/icon-hands.svg';
import meli from '@/../public/meli.png';

const Header = () => {

    return (
        <header
            className={styles.container}
        >
            <Link href='/' className={styles.a}>
                <Image
                    src={meli}
                    alt='logo'
                    width={100}
                    height={100}
                    className={styles.logo}
                />
            </Link>
            <SearchForm />
        </header>
    )
}

export default Header;
