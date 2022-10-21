import Header from '../components/Header'
import Footer from './Footer'

type Props = {
    children: any
}

const Layout = ({children}: Props) => {
    return(
        <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}

export default Layout;