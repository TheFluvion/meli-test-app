import React from "react"
import ContentLoader from "react-content-loader"
import styles from "./ItemSearchSkeleton.module.scss"

const ItemSearchSkeleton = ({ ...props }) => (
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
        <rect x="16" y="16" rx="0" ry="0" width="180" height="180" />
        <rect x="207" y="32" rx="3" ry="3" width="200" height="20" />
        <rect x="207" y="71" rx="3" ry="3" width="508" height="6" />
        <rect x="207" y="91" rx="3" ry="3" width="300" height="6" />
    </ContentLoader>
)

export default ItemSearchSkeleton
