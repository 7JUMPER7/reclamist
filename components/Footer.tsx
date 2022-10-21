import { NextComponentType } from "next";
import Link from "next/link";
import styles from "@/styles/Footer.module.scss";
import Image from "next/image";

const Footer: NextComponentType = () => {
    return(
        <footer className={styles.footerContainer}>
            <div className={styles.infoWrap}>
                <a className={styles.instagramLink} href={(process.env.NEXT_PUBLIC_INSTAGRAM_LINK) ? process.env.NEXT_PUBLIC_INSTAGRAM_LINK : ''} target="_blank" rel="noreferrer">
                    <Image src={'/instagram.svg'} alt={'instagram.svg'} height={24} width={24} />
                </a>
                <a className={styles.phone} href={'tel:+380677381182'}>+380 (67) 738 11 82</a>
            </div>
            <Link href={'/'}>RECLAMIST</Link>
        </footer>
    )
}

export default Footer;