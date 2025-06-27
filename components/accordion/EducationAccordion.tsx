import {AcademicCapIcon, ChevronDownIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {EducationModel} from "../models/education.model";
import Link from "next/link";
import {useTranslation} from 'next-i18next';
import {useTranslatedContent} from "../../lib/useTranslatedContent";

export default function EducationAccordion(data: { item: EducationModel}) {
    const [open, setOpen] = useState(false)
    const {t} = useTranslation();
    const description = useTranslatedContent(data.item.description);

    return (
        <div className="mx-auto w-full">
            <div
                className="rounded-lg  border p-2 transition dark:border-slate-700 sm:p-3 grid grid-cols-12  auto-rows-min items-center justify-between">
                <div className='col-span-10 md:col-span-8'>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg  p-2">
                                <AcademicCapIcon className="h-6 w-6 text-blue-600 transition dark:text-slate-300"
                                                 aria-hidden="true"/>
                            </span>
                            <p className="ml-3 truncate font-medium text-black text-xs sm:text-base transition dark:text-slate-100">
                                {data.item.degree}
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex flex-1 items-center mt-2 gap-4 text-gray-500 font-thin text-xs sm:text-sm md:text-sm lg:text-base truncate transition dark:text-slate-300">
                        <span>{data.item.from} - {data.item.to}</span> <span>|</span> <Link target='_blank' passHref
                                                                                            href={data.item.url}
                                                                                            className={'font-semibold hover:text-blue-600 transition dark:hover:text-yellow-500'}>{data.item.name}</Link>
                    </div>                </div>
                <div className="col-span-2 md:col-span-4 w-auto flex  sm:mt-0 justify-self-end">
                    <button onClick={() => setOpen(!open)}
                            className="hidden lg:flex items-center justify-center rounded-md border transition dark:border-slate-800 px-4 py-2 text-sm font-medium text-blue-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800">
                        {t('experience.education.whatIDone')}
                    </button>
                    <button onClick={() => setOpen(!open)}
                            className=" flex lg:hidden items-center justify-center  rounded-md   bg-white px-4 py-2 text-sm font-medium text-blue-600  hover:bg-blue-50">
                        {open ? <ChevronDownIcon className='h-5 w-5'/> : <ChevronRightIcon className='h-5 w-5'/>}
                    </button>
                </div>
                {open ?
                    <div className='col-span-full transition mt-6 text-xs sm:text-sm md:text-md dark:text-slate-300'>
                        <p>
                            {description}
                        </p>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}
