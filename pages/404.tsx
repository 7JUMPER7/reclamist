import { NextPage } from "next";
import styles from "@/styles/NotFound.module.scss";

const NotFound: NextPage = () => {
    return(
        <div className={styles.notFoundContainer}>
            <h1>404</h1>
            <p>Page not found</p>
        </div>
    );
}

export default NotFound;