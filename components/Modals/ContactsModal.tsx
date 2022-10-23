import { Context } from "components/Layout";
import { useContext } from "react";
import styles from "@/styles/Modals.module.scss";

const ContactsModal = () => {
    const { contactsModal, setContactsModal } = useContext(Context);

    const handleClose = (e: any) => {
        console.log(e.target.classList);
        const item = e.target.classList[0];
        if (item?.includes("modalContainer")) {
            setContactsModal(false);
        }
    };

    return (
        <div
            className={
                styles.modalContainer +
                (contactsModal ? "" : " " + styles.hidden)
            }
            onClick={(e) => handleClose(e)}
        >
            <div className={styles.modalWindow}>
                <button
                    onClick={() => setContactsModal(false)}
                    className={styles.closeBtn}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1 1L17 17" stroke="#FFFFFF" />
                        <path d="M17 1L1 17" stroke="#FFFFFF" />
                    </svg>
                </button>
                <h2>Контакти:</h2>
                <div className={styles.links}>
                    <a href="tel:+380985790007">+380 (98) 579 00 07 <span>(офіс)</span></a>
                    <a href="tel:+380677381182">
                        +380 (67) 738 11 82 <span>(директор Анатолій Семенов)</span>
                    </a>
                    <a href="tel:+380980630952">
                        +380 (98) 063 09 52 <span>(дизайнер Ольга Тарута)</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactsModal;
