import React from "react"
import ContentLoader from "react-content-loader"
import styles from "./ItemDetailSkeleton.module.scss"

const ItemDetailSkeleton = ({ ...props }) => (
    <ContentLoader
        speed={1}
        width={100}
        height={100}
        viewBox="100 100"
        backgroundColor="#eeeeee"
        foregroundColor="#000000"
        {...props}
        className={styles.container}
    >
        <rect x="32" y="32" rx="0" ry="0" width="50%" height="50%" />

        <rect x="60%" y="32" rx="3" ry="3" width="20%" height="10" />
        <rect x="60%" y="56" rx="3" ry="3" width="28%" height="24" />
        <rect x="60%" y="85" rx="3" ry="3" width="30%" height="24" />
        <rect x="60%" y="127" rx="3" ry="3" width="30%" height="46" />
        <rect x="60%" y="195" rx="3" ry="3" width="30%" height="46" />

        <rect x="32" y="70%" rx="3" ry="3" width="50%" height="46" />
        <rect x="32" y="78%" rx="3" ry="3" width="50%" height="100" />

    </ContentLoader>
)

export default ItemDetailSkeleton
