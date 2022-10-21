import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import libraryStyles from "@/styles/library.module.scss";
import Slider from "components/Slider";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Reclamist</title>
            </Head>

            <div className={styles.bannerContainer}>
                <svg
                    viewBox="0 0 100% 100%"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.grain}
                >
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.5"
                            numOctaves="6"
                            stitchTiles="stitch"
                        />
                    </filter>

                    <rect
                        width="100%"
                        height="100%"
                        filter="url(#noiseFilter)"
                    />
                </svg>

                <video
                    loop={true}
                    autoPlay={true}
                    muted={true}
                    poster={"/BG/BG_Video_Thumb.webp"}
                >
                    <source
                        src={"/BG/BG_Video.webm"}
                        type={"video/mp4"}
                    ></source>
                </video>
                <div className={styles.tint}></div>
                <div className={styles.gradient}></div>

                <div className={styles.text}>
                    <h1>ВИГОТОВЛЕННЯ РЕКЛАМИ</h1>
                    <p>швидко та якісно</p>
                    <button className={libraryStyles.btn}>Подробніше</button>
                </div>

                <div className={styles.arrow}>
                    <svg
                        width="21"
                        height="15"
                        viewBox="0 0 21 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.9375 0L0 3.9375L10.5 14.4375L21 3.9375L17.0625 0L10.5 6.5625L3.9375 0Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>

            <section className={styles.part}>
                <h2>БАНЕРИ</h2>
                <div className={styles.wrap}>
                    <Slider
                        images={[
                            "/Images/banners/itstep.jpeg",
                            "/Images/banners/kachovska_ribka.jpeg",
                            "/Images/banners/avto_major.jpeg",
                            "/Images/banners/itstep_large_banner.jpeg",
                        ]}
                    />
                    <div className={styles.infoBox}>
                        <p>
                            Банери бувають різними фівфівіфв фівфів ф вф івфів
                            фвіфів фівф фоівро флірвлофір влофрвлофір Вф ор
                            волфр влофір влофір ловфрловрфілорв олфірв лфоі
                            волфіірв фолв офлво Наружка реклаама буває різною
                            фівфівіфв фівфів ф вф івфів фвіфів фівф фоівро
                            флірвлофір влофрвлофір вф ор волфр влофір влофір
                            ловфрловрфілорв
                        </p>
                        <button className={libraryStyles.btn}>
                            Переглянути більше
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
