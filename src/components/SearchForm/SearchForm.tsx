"use client";

import Image from "next/image";
import searchIcon from "@/../public/icon-search.svg";
import styles from "./SearchForm.module.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSearchItems from "@/hooks/useSearchItems";

const SearchForm = () => {
    const router = useRouter();
    const { param } = useSearchItems('search', true);
    const [querySearch, setQuerySearch] = useState<string>(param || "");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!querySearch) return;
        router.push(`/items?search=${querySearch}`);
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuerySearch(e.target.value);
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
                value={querySearch}
                onChange={inputHandler}
            />
            <button
                className={styles.button}
                type="submit"
            >
                <Image
                    src={searchIcon}
                    className={styles.icon}
                    alt='search'
                />
            </button>
        </form>
    )

}

export default SearchForm;
