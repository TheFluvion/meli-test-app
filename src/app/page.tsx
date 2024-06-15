"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import request from "@/services";

const Home = () => {

  useEffect(() => {
    request('items/MLA1275795996').then((res) => {
      console.log(res.data);
    })
  }, [])

  return (
    <main className={styles.main}>
      <p>
        Instantly deploy your Next.js site to a shareable URL with Vercel.
      </p>
    </main>
  );
}

export default Home
