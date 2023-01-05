import {ChevronDownIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {useState} from "react";


export default function ExperienceAccordion(data: { item: { role: string, period: string, company: string, description: string, icon: any } }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="mx-auto w-full">
            <div
                className="rounded-lg bg-white border p-2 shadow-lg sm:p-3 grid grid-cols-12  auto-rows-min items-center justify-between">
                <div className='col-span-10 md:col-span-8'>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg bg-blue-600 p-2">
                                <data.item.icon className="h-3 w-3 sm:h-6 md:w-6 text-white"
                                                aria-hidden="true"/>
                            </span>
                            <p className="ml-3 truncate font-medium text-black text-xs sm:text-base">
                                {data.item.role}
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex flex-1 items-center mt-2 gap-4 text-gray-500 font-thin text-xs sm:text-sm md:text-sm lg:text-base truncate">
                        {data.item.company} | {data.item.period}
                    </div>
                </div>
                <div className="col-span-2 md:col-span-4 w-auto flex  sm:mt-0 justify-self-end">
                    <button onClick={()=>setOpen(!open)}
                            className="hidden lg:flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50">
                        What I have done here
                    </button>
                    <button onClick={()=>setOpen(!open)}
                        className=" flex lg:hidden items-center justify-center  rounded-md   bg-white px-4 py-2 text-sm font-medium text-blue-600  hover:bg-blue-50">
                        {open ? <ChevronDownIcon className='h-5 w-5'/>:<ChevronRightIcon className='h-5 w-5'/> }
                    </button>
                </div>
                {open ?
                    <div className='col-span-full mt-6 text-xs sm:text-sm md:text-md '>
                        <p className='leading-6'>
                            {data.item.description}
                        </p>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}
