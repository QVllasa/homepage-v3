import { Switch } from "./ui/switch";
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {useContext} from "react";
import DarkModeContext from "../stores/darkmode-context";

export const DarkModeSwitch = () => {
    const darkModeCtx = useContext(DarkModeContext)
    return (
        <>            <div className={'flex items-center gap-2 mr-5'}>
                <Switch
                    checked={darkModeCtx.darkMode}
                    onCheckedChange={darkModeCtx.setDarkMode}
                />
                {darkModeCtx.darkMode ?
                    <MoonIcon className={'w-5 h-5 text-3xl text-gray-400 '}/> :
                    <SunIcon className={' w-5 h-5 text-3xl text-gray-400'}/>}
            </div>
        </>
    )
}
