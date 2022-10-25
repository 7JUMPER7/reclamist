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
        imagePath: '/Images/other/road_signs.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/other/exchange.jpeg',
        description: 'Нова пошта бла бла asdasd asd as das das das asas sadasdasd as das das da a dasdasdsadasasd '
    },
    {
        imagePath: '/Images/other/crane_ukraine.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/other/attention.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/other/darkwood.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/other/vino_piano.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/other/ashan.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/other/gas_station.jpeg',
        description: 'Нова пошта бла бла'
    },
];

const Other: NextPage = () => {
    const {setContactsModal} = useContext(Context);

    const handleClick = () => {
        setContactsModal(true);
    }

    return (
        <div className={styles.container}>
            <h1>ІНШЕ</h1>
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

export default Other;
