import { NextComponentType } from "next";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Header: NextComponentType = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const scroll = window.scrollY;
        if(scroll > 50 && !isScrolled) {
            setIsScrolled(true);
        } else if(isScrolled && scroll <= 50) {
            setIsScrolled(false);
        }
    }, [isScrolled]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    return(
        <header className={styles.headerContainer + ((isScrolled) ? ' ' + styles.scrolled : '')}>
            <Link href={'/'}>RECLAMIST</Link>
            <div className={styles.infoWrap}>
                <a className={styles.phone} href={'tel:+380677381182'}>+380 (67) 738 11 82</a>
                <a className={styles.instagramLink} href={(process.env.NEXT_PUBLIC_INSTAGRAM_LINK) ? process.env.NEXT_PUBLIC_INSTAGRAM_LINK : ''} target="_blank" rel="noreferrer">
                    <Image src={'/instagram.svg'} alt={'instagram.svg'} height={24} width={24} />
                </a>
            </div>
        </header>
    )
}

export default Header;