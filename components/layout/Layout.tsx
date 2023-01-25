import {Fragment, useContext} from "react";
import Navbar from "../navbar/Navbar";
import DarkModeContext from "../../stores/darkmode-context";
import ContactSection from "../contact/ContactSection";
import Footer from "../footers/Footer";

export const Layout = (props: any) => {
    const darkModeCtx = useContext(DarkModeContext);
    return (
        <Fragment>
            <div className={`${darkModeCtx.darkMode ? 'dark' : ''} `}>
                <Navbar/>
                <div className={'overflow-hidden mt-12 '}>
                    {props.children}
                </div>
                <ContactSection/>
                <Footer/>
            </div>
        </Fragment>
    )

}
