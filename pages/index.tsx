import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import libraryStyles from "@/styles/library.module.scss";
import Slider from "components/Slider";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Reclamist</title>
                <meta name="description" content="Виготовлення зовнішньої реклами, банерів, наклейок для вашого бізнесу."></meta>
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
                    loop
                    muted
                    poster={"/BG/BG_Video_Thumb.webp"}
                    playsInline
                    autoPlay
                    controls={false}
                >
                    <source
                        src={"/BG/BG_Video.mp4"}
                        type={"video/mp4"}
                    ></source>
                </video>
                <div className={styles.tint}></div>
                <div className={styles.gradient}></div>

                <div className={styles.text}>
                    <h1>ВИГОТОВЛЕННЯ РЕКЛАМИ</h1>
                    <p>швидко та якісно</p>
                    <button className={libraryStyles.btn + ' ' + styles.btn}>Подробніше</button>
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
                        <Link href={'/banners'}>
                            <button className={libraryStyles.btn}>
                                Переглянути більше
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.part}>
                <h2>ВИВІСКИ</h2>
                <div className={`${styles.wrap} ${styles.reversed}`}>
                    <Slider
                        images={[
                            "/Images/signboards/nova_pashta.jpeg",
                            "/Images/signboards/sushi_ushi.jpeg",
                            "/Images/signboards/kviti.jpeg",
                            "/Images/signboards/td_red.jpeg",
                        ]}
                    />
                    <div className={styles.infoBox}>
                        <p>
                            Вивіски бувають різними різною фівфівіфв фівфів ф вф
                            івфів фвіфів фівф фоівро флірвлофір влофрвлофір Вф
                            ор волфр влофір влофір ловфрловрфілорв олфірв лфоі
                            волфіірв фолв офлво Наружка реклаама буває різною
                            фівфівіфв фівфів ф вф івфів фвіфів фівф фоівро
                            флірвлофір влофрвлофір вф ор волфр влофір влофір
                            ловфрловрфілорв олфірв лфоі волфіірв фолв офлво
                            Наружка реклаама буває різною фівфівіфв фівфів ф вф
                            івфів фвіфів фівф фоівро флірвлофір влофрвлофір вф
                            ор волфр влофір влофір Ловфрловрфілорв олфірв лфоі
                            волфіірв фолв офлво Наружка реклаама буває різною.
                        </p>
                        <Link href={'/signboards'}>
                        <button className={libraryStyles.btn}>
                            Переглянути більше
                        </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.part}>
                <h2>ІНШЕ</h2>
                <div className={styles.wrap}>
                    <Slider
                        images={[
                            "/Images/other/road_signs.jpeg",
                            "/Images/other/vino_piano.jpeg",
                            "/Images/other/darkwood.jpeg",
                            "/Images/other/exchange.jpeg",
                        ]}
                    />
                    <div className={styles.infoBox}>
                        <p>
                            Також ми виробляємо фівфівіфв фівфів ф вф івфів
                            фвіфів фівф фоівро флірвлофір влофрвлофір Вф ор
                            волфр влофір влофір ловфрловрфілорв олфірв лфоі
                            волфіірв фолв офлво Наружка реклаама буває різною
                            фівфівіфв фівфів ф вф івфів фвіфів фівф фоівро
                            флірвлофір влофрвлофір вф ор волфр влофір влофір
                            ловфрловрфілорв
                        </p>
                        <Link href={'/other'}>
                        <button className={libraryStyles.btn}>
                            Переглянути більше
                        </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
