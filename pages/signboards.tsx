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
        imagePath: '/Images/signboards/nova_pashta.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/td_red.jpeg',
        description: 'Нова пошта бла бла asdasd asd as das das das asas sadasdasd as das das da a dasdasdsadasasd '
    },
    {
        imagePath: '/Images/signboards/more_piva.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/vesna.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/dantist.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/sushi_ushi.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/kopiyochka.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/avto_gril.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/cofishka.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/pivas.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/vikond.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/vovk.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/tui.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/itstep_STEP.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/royal_beauty.jpeg',
        description: 'Нова пошта бла бла'
    },
    {
        imagePath: '/Images/signboards/kviti.jpeg',
        description: 'Нова пошта бла бла'
    },
];

const Signboards: NextPage = () => {
    const {setContactsModal} = useContext(Context);

    const handleClick = () => {
        setContactsModal(true);
    }

    return (
        <div className={styles.container}>
            <h1>ВИВІСКИ</h1>
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

export default Signboards;
