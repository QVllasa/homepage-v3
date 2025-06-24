import Skills from "./Skills";
import Stack from "./Stack";
import Stats from "./Stats";
import Experience from "./Experience";
import Education from "./Education";
import {useTranslation} from 'next-i18next';


export default function ExperienceSection() {
    const {t} = useTranslation();

    return (
        <div className=" bg-white transition dark:bg-slate-900 py-16 lg:py-24" id={'experience'}>
            <div className="relative mx-auto w-auto lg:max-w-7xl lg:px-8">
                <div
                    className="relative lg:flex lg:flex-col lg:items-center mx-auto max-w-md space-y-6 px-4 sm:max-w-3xl sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                    <h2 className="text-3xl font-bold transition leading-8 tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
                        {t('experience.heading')}
                    </h2>
                    <p className="mx-auto mt-4 transition text-xl text-gray-500 dark:text-slate-200">
                        {t('experience.subheading')}
                    </p>
                </div>
                <div className=' divide-y transition dark:divide-slate-700'>
                    <Stats/>
                    <Skills/>
                    <Experience/>
                    <Education/>
                    <Stack/>
                </div>
            </div>
        </div>
    )
}
