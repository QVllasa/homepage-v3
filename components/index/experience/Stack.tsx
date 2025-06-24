import {ArrowSmallDownIcon, ArrowSmallUpIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {StackModel} from "../../models/stack.model";
import Link from "next/link";
import {Tooltip} from "@mui/material";
import Image from "next/image";
import {StackData} from "../../../data/stack";
import {useTranslation} from 'next-i18next';

export default function Stack() {
    const [counter, setCounter] = useState(9)
    const {t} = useTranslation();

    const stack: StackModel[] = StackData;

    return (
        <div className="" id={'stack'}>
            <div className="relative mx-auto pt-24">
                <div
                    className="lg:grid lg:grid-cols-3 lg:gap-8 mx-auto max-w-md  px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl">
                    <div className='col-span-1'>
                        <h2 className="text-3xl font-bold tracking-tight transition text-gray-900 sm:text-4xl dark:text-slate-100">
                            {t('experience.stack.title')}
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg transition text-gray-500 dark:text-slate-300">
                            {t('experience.stack.subtitle')}
                        </p>
                    </div>
                    <div className="mt-12 col-span-2 grid grid-cols-3 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                        {stack.map((item, index) => {
                            if (index < counter) {
                                return (
                                    <div key={item.id}
                                         className="col-span-1 flex transition justify-center bg-gray-50 dark:bg-slate-800 py-8 px-8">
                                        <Tooltip title={item.name.toUpperCase()}>
                                            <Link href={item.url.trim()} target={'_blank'}
                                                  className={'flex items-center transition dark:brightness-200 dark:hover:brightness-100 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition'}>
                                                <Image className="w-16 h-auto max-h-12 aspect-auto "
                                                       width={100} height={100}
                                                       src={item.icon}
                                                       alt={item.name}
                                                />
                                            </Link>
                                        </Tooltip>
                                    </div>)
                            }
                        })}
                    </div>
                    <div className='flex col-span-2 col-start-2 justify-center items-end mt-8'>
                        <button
                            type="button"
                            onClick={() => counter != stack.length ? setCounter(stack.length) : setCounter(9)}
                            className="inline-flex items-center rounded-md border transition border-transparent bg-blue-600 dark:bg-yellow-500 dark:text-black px-4 py-2 text-sm font-medium text-white  hover:bg-blue-700 focus:outline-none"
                        >
                            {counter != stack.length ? t('experience.stack.showMore') : t('experience.stack.showLess')}
                            {counter != stack.length ?  <ArrowSmallDownIcon className='h-5 w-5 ml-3'/> :  <ArrowSmallUpIcon className='h-5 w-5 ml-3'/>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
