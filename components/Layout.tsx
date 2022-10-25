import { createContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import ContactsModal from "./Modals/ContactsModal";

type Props = {
    children: any;
};

type ContextType = {
    contactsModal: boolean,
    setContactsModal: (value: boolean) => void
}

export const Context = createContext<ContextType>({} as ContextType);

const Layout = ({ children }: Props) => {
    const [contactsModal, setContactsModal] = useState(false);

    useEffect(() => {
        window.history.scrollRestoration = 'auto';
    }, []);

    return (
        <Context.Provider value={{
            contactsModal,
            setContactsModal
        }}>
            <ContactsModal />
            <Header />
            <main>{children}</main>
            <Footer />
        </Context.Provider>
    );
};

export default Layout;
