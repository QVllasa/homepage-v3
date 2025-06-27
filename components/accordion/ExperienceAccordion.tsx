import {BuildingOfficeIcon, ChevronDownIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {ExperienceModel} from "../models/experience.model";
import Link from "next/link";
import {useTranslatedContent} from "../../lib/useTranslatedContent";


export default function ExperienceAccordion(data: { item: ExperienceModel }) {
    const [open, setOpen] = useState(false)
    const description = useTranslatedContent(data.item.description);


    return (
        <>
            <div className="mx-auto w-full">
                <div
                    className="rounded-lg bg-white transition dark:bg-slate-900 border dark:border-slate-700 p-2 sm:p-3 grid grid-cols-12  auto-rows-min items-center justify-between">
                    <div className='col-span-10 md:col-span-8'>
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="flex w-0 flex-1 items-center">
                                <span className="flex rounded-lg  p-2">
                                    <BuildingOfficeIcon
                                        className="h-3 transition w-3 sm:h-6 md:w-6 text-blue-600 dark:text-slate-300"
                                        aria-hidden="true"/>
                                </span>
                                <p className="ml-3 transition truncate font-medium text-black dark:text-slate-100 text-xs sm:text-base uppercase">
                                    {data.item.role}
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex flex-1 transition items-center mt-2 gap-4 text-gray-500 dark:text-slate-300 font-thin text-xs sm:text-sm md:text-sm lg:text-base truncate">
                            {/*// @ts-ignore*/}
                            <span>{data.item.from} - {data.item.to}</span> <span>|</span> <Link target='_blank' passHref
                                                                                                href={data.item.companyUrl}
                                                                                                className={'font-semibold  transition hover:text-blue-600 dark:hover:text-yellow-500'}>{data.item.company}</Link>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-4 w-auto flex  sm:mt-0 justify-self-end">
                        <button onClick={() => setOpen(!open)}
                                className=" flex items-center justify-center  rounded-md   px-4 py-2 text-sm transition font-medium text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 hover:bg-blue-50">
                            {open ? <ChevronDownIcon className='h-5 w-5'/> : <ChevronRightIcon className='h-5 w-5'/>}
                        </button>
                    </div>
                    {open ?
                        <div
                            className='col-span-full transition mt-6 text-xs sm:text-sm md:text-md dark:text-slate-300'>                            <p className='leading-6'>
                            {description}
                            </p>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </>

    )
}
