import {Fragment, useContext} from "react";
import Navbar from "../navbar/Navbar";
import DarkModeContext from "../../stores/darkmode-context";

export const Layout = (props: any) => {
    const darkModeCtx = useContext(DarkModeContext);
    return (
        <Fragment>
            <div className={`${darkModeCtx.darkMode ? 'dark' : ''} `}>
                <Navbar/>
                <div className={'overflow-hidden mt-24 '}>
                    {props.children}
                </div>

            </div>
        </Fragment>
    )

}
