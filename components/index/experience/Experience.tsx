import ExperienceAccordion from "../../accordion/ExperienceAccordion";
import {ArrowSmallDownIcon, ArrowSmallUpIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {ExperienceModel} from "../../models/experience.model";
import {Experiences} from "../../../data/experiences";
import {useTranslation} from 'next-i18next';

export default function Experience(){
    const [counter, setCounter] = useState(4);
    const {t} = useTranslation('common');

    const exp: ExperienceModel[] = Experiences;

    return (
        <div className="" id={'experiences'}>
            <div className="relative mx-auto py-24 ">
                <div
                    className="relative mx-auto max-w-md  px-4 sm:max-w-3xl lg:max-w-7xl sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold transition tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
                            {t('experience.work.title')}
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg transition text-gray-500 dark:text-slate-300">
                            {t('experience.work.subtitle')}
                        </p>
                    </div>
                    <dl className="mt-12 lg:mt-0 grid grid-cols-1 gap-4 lg:col-span-2">
                        {exp.map((item, index) => {
                                if (index < counter) return <ExperienceAccordion key={index} item={item}/>
                            }
                        )}
                        <div className='flex justify-center items-end '>
                            <button
                                onClick={() => exp.length != counter ? setCounter(exp.length) : setCounter(4)}
                                type="button"
                                className="inline-flex items-center rounded-md transition border border-transparent bg-blue-600 dark:bg-yellow-500 dark:text-black px-4 py-2 text-sm font-medium text-white  hover:bg-blue-700 focus:outline-none "
                            >
                                {exp.length != counter ? t('experience.work.showMore') : t('experience.work.showLess')}
                                {exp.length != counter ? <ArrowSmallDownIcon className='h-5 w-5 ml-3'/> : <ArrowSmallUpIcon className='h-5 w-5 ml-3'/>}
                            </button>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
