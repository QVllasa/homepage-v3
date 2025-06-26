import {ArrowSmallDownIcon, ArrowSmallUpIcon, CheckCircleIcon, CheckIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {SkillModel} from "../../models/skill.model";
import {SkillsData} from "../../../data/skills";
import {useTranslation} from 'next-i18next';
import {useTranslatedContent} from "../../../lib/useTranslatedContent";


export default function Skills() {
    const [showMore, setShowMore] = useState(false);
    const {t} = useTranslation();

    const skills: SkillModel[] = SkillsData;

    return (
        <div className="" id={'skills'}>
            <div className="relative mx-auto  py-24 ">
                <div
                    className="relative mx-auto max-w-md  px-4 sm:max-w-3xl sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16 lg:max-w-7xl">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold transition tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
                            {t('experience.skills.title')}
                        </h2>
                        <p className="mt-3 max-w-3xl transition text-lg text-gray-500 dark:text-slate-300">
                            {t('experience.skills.subtitle')}
                        </p>
                    </div>
                    <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
                        {skills?.map((item, index) => {
                            if (index < 6) {
                                return <SkillItem key={index} skill={item} size="large"/>
                            }
                        })}
                    </dl>
                    <div className='flex justify-center items-end mt-8 lg:max-w-7xl sm:max-w-3xl sm:px-6 max-w-md lg:col-span-2 lg:col-start-2'>
                        <button
                            type="button"
                            onClick={() => setShowMore(!showMore)}
                            className="inline-flex items-center rounded-md border transition border-transparent bg-blue-600 dark:bg-yellow-500 dark:text-black px-4 py-2 text-sm font-medium text-white  hover:bg-blue-700 focus:outline-none "
                        >
                            {showMore ? t('experience.skills.showLess') : t('experience.skills.showMore')}
                            {showMore ? <ArrowSmallUpIcon className='h-5 w-5 ml-3'/> : <ArrowSmallDownIcon className='h-5 w-5 ml-3'/>}
                        </button>
                    </div>
                </div>
                {showMore ? <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                    {skills?.map((item, index) => {
                        if (index >= 6) return <SkillItem key={item.name} skill={item} size="small"/>
                    })}
                </dl> : null}
            </div>
        </div>
    )
}

// Separate component for individual skills to properly use hooks
function SkillItem({skill, size}: { skill: SkillModel, size: 'large' | 'small' }) {
    const translatedDescription = useTranslatedContent(skill.description);

    if (size === 'large') {
        return (
            <div className="relative">
                <dt>
                    <CheckCircleIcon
                        className="absolute transition h-8 w-8 text-blue-600 dark:text-yellow-500 font-bold"
                        aria-hidden="true"/>
                    <p className="ml-12 text-lg font-semibold transition leading-8 text-gray-900 dark:text-slate-100">{skill.name}</p>
                </dt>
                <dd className="mt-3 ml-12 text-sm transition leading-7 text-gray-600 dark:text-slate-300">{translatedDescription}</dd>
            </div>
        );
    }

    return (
        <div className="relative">
            <dt>
                <CheckIcon
                    className="absolute transition mt-1 h-6 w-6 text-blue-600 dark:text-yellow-500"
                    aria-hidden="true"/>
                <p className="ml-10 text-sm font-semibold transition leading-8 text-gray-900 dark:text-slate-100">{skill.name}</p>
            </dt>
            <dd className="mt-2 ml-10 text-sm transition leading-7 text-gray-600 dark:text-slate-300">{translatedDescription}</dd>
        </div>
    );
}
