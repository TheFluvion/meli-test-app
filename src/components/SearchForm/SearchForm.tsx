"use client";
import Image from "next/image";
import search from "@/../public/icon-search.svg";
import styles from "./SearchForm.module.scss";
import { useRouter } from "next/navigation";

const SearchForm = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = formData.get("search");
        router.push(`/items?search=${search}`);
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <input
                className={styles.input}
                type="text"
                placeholder="Nunca dejes de buscar"
                name="search"
            />
            <button
                className={styles.button}
                type="submit"
            >
                <Image
                    src={search}
                    className={styles.icon}
                    alt='search'
                />
            </button>
        </form>
    )

}

export default SearchForm;
