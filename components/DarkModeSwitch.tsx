import {Switch} from "@headlessui/react";
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {useContext} from "react";
import DarkModeContext from "../stores/darkmode-context";

export const DarkModeSwitch = () => {
    const darkModeCtx = useContext(DarkModeContext)
    return (
        <>
            <div className={'flex items-center gap-2 mr-5'}>
                <Switch
                    checked={darkModeCtx.darkMode}
                    onChange={darkModeCtx.setDarkMode}
                    className={`${
                        darkModeCtx.darkMode ? 'bg-yellow-500' : 'bg-gray-300'
                    } relative inline-flex h-4 w-8 items-center rounded-full`}
                >
                    <span
                        className={`${
                            darkModeCtx.darkMode ? 'translate-x-4' : 'translate-x-0'
                        } inline-block h-5 w-5 transform rounded-full bg-white transition border`}
                    />
                </Switch>
                {darkModeCtx.darkMode ?
                    <MoonIcon className={'w-5 h-5 text-3xl text-gray-400 '}/> :
                    <SunIcon className={' w-5 h-5 text-3xl text-gray-400'}/>}
            </div>
        </>
    )
}
