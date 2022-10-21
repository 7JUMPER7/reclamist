import styles from "@/styles/Slider.module.scss";
import Image from "next/future/image";
import { useEffect, useRef, useState } from "react";

type Props = {
    images: string[];
};

const Slider = ({ images }: Props) => {
    const container = useRef<HTMLDivElement | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [leftValue, setLeftValue] = useState(180);
    const [touchPosition, setTouchPosition] = useState(null);

    const next = () => {
        if (selectedImage + 1 < images.length) {
            setSelectedImage((p) => p + 1);
        }
    };

    const prev = () => {
        if (selectedImage - 1 >= 0) {
            setSelectedImage((p) => p - 1);
        }
    };

    const handleResize = () => {
        const containerRef = container.current;
        if (containerRef) {
            setLeftValue(
                containerRef.offsetWidth / 2 -
                    (170 + (300 - 60) * selectedImage)
            );
        }
    };

    const handleTouchStart = (e: any) => {
        console.dir(e);
        let touchDown = null;
        if (e.touches) {
            touchDown = e.touches[0].clientX;
        } else {
            touchDown = e.clientX;
        }
        setTouchPosition(touchDown);

        setTimeout(() => {
            setTouchPosition(null);
        }, 300);
    };

    const handleTouchMove = (e: any) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        let currentTouch = null;
        if (e.touches) {
            currentTouch = e.touches[0].clientX;
        } else {
            currentTouch = e.clientX;
        }
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next();
            setTouchPosition(null);
        }

        if (diff < -5) {
            prev();
            setTouchPosition(null);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [selectedImage]);

    return (
        <div className={styles.sliderWrap}>
            <button className={styles.sliderButton} onClick={prev}>
                <svg
                    width="15"
                    height="29"
                    viewBox="0 0 15 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.66 28.9999C12.3612 29.001 12.066 28.935 11.7961 28.807C11.5261 28.6789 11.2883 28.492 11.1 28.2599L1.44002 16.2599C1.14586 15.9021 0.985046 15.4532 0.985046 14.9899C0.985046 14.5267 1.14586 14.0778 1.44002 13.7199L11.44 1.71994C11.7795 1.31151 12.2673 1.05466 12.7962 1.0059C13.325 0.95714 13.8516 1.12046 14.26 1.45994C14.6685 1.79942 14.9253 2.28724 14.9741 2.81609C15.0228 3.34495 14.8595 3.87151 14.52 4.27994L5.58002 14.9999L14.22 25.7199C14.4646 26.0135 14.6199 26.371 14.6677 26.7501C14.7155 27.1292 14.6536 27.514 14.4895 27.8591C14.3254 28.2041 14.0659 28.495 13.7417 28.6971C13.4174 28.8993 13.0421 29.0044 12.66 28.9999V28.9999Z"
                        fill="#006CD0"
                    />
                </svg>
            </button>
            <div
                className={styles.sliderContainer}
                ref={container}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onMouseDown={handleTouchStart}
                onMouseMove={handleTouchMove}
            >
                <div
                    className={styles.imagesHandler}
                    style={{ left: leftValue }}
                >
                    {images.map((image, index) => {
                        return (
                            <Image
                                key={index}
                                src={image}
                                alt={image}
                                width={300}
                                height={300}
                                className={
                                    styles.image +
                                    (selectedImage === index
                                        ? " " + styles.selected
                                        : "")
                                }
                            ></Image>
                        );
                    })}
                </div>
            </div>
            <button className={styles.sliderButton} onClick={next}>
                <svg
                    width="16"
                    height="30"
                    viewBox="0 0 16 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.99998 29C2.53268 29.0009 2.0798 28.8382 1.71998 28.54C1.51746 28.3721 1.35006 28.1659 1.22736 27.9332C1.10465 27.7005 1.02906 27.4459 1.00491 27.1839C0.980755 26.922 1.00852 26.6579 1.08661 26.4066C1.1647 26.1554 1.29158 25.9221 1.45998 25.72L10.42 15L1.77998 4.26C1.61385 4.05543 1.48979 3.82004 1.41492 3.56736C1.34006 3.31468 1.31587 3.0497 1.34375 2.78764C1.37163 2.52558 1.45102 2.27162 1.57737 2.04034C1.70372 1.80907 1.87453 1.60505 2.07998 1.44C2.28691 1.25793 2.52924 1.1206 2.79177 1.03662C3.05429 0.952639 3.33134 0.923831 3.60553 0.952001C3.87971 0.980171 4.14512 1.06471 4.38508 1.20031C4.62505 1.33592 4.83439 1.51966 4.99998 1.74L14.66 13.74C14.9541 14.0979 15.115 14.5468 15.115 15.01C15.115 15.4733 14.9541 15.9221 14.66 16.28L4.65998 28.28C4.45935 28.522 4.20448 28.7134 3.91606 28.8385C3.62764 28.9636 3.31379 29.0189 2.99998 29Z"
                        fill="#006CD0"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Slider;
