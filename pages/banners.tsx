import styles from "@/styles/Showpage.module.scss";
import { Context } from "components/Layout";
import { NextPage } from "next";
import Image from "next/future/image";
import { useContext } from "react";

type Image = {
    imagePath: string;
    description?: string;
};

const images: Image[] = [
    {
        imagePath: '/Images/banners/nova_poshta_banner.webp',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/door_center.jpeg',
        description: 'Нова пошта бла бла asdasd asd as das das das asas sadasdasd as das das da a dasdasdsadasasd '
    },
    {
        imagePath: '/Images/banners/td_large_banner.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/sugar.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/odyag_banner.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/beach_banner.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/7km.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/bamboo.webp',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/holiday_banner.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/vsuttya_banner.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/kachovska_ribka.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/itstep_large_banner.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/itstep.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/vianor_banner.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/banners/avto_major.jpeg',
        description: 'Нова пошта бла бла'
    },
];

const Banners: NextPage = () => {
    const {setContactsModal} = useContext(Context);

    const handleClick = () => {
        setContactsModal(true);
    }

    return (
        <div className={styles.container}>
            <h1>БАНЕРИ</h1>
            <div className={styles.imagesContainer}>
                {
                    images.map((image, index) => {
                        return(
                            <div className={styles.image} key={index}>
                                <Image src={image.imagePath} alt={image.imagePath} width={450} height={450} onClick={handleClick}></Image>
                                <p>{image.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Banners;
