import MegaphoneIcon from "@heroicons/react/20/solid/MegaphoneIcon";
import XMarkIcon from "@heroicons/react/20/solid/XMarkIcon";
import {AcademicCapIcon} from "@heroicons/react/24/outline";

export default function EducationAccordion(data: {item:{id: number, degree: string,period?:string, institute: string, description: string}}) {
    return (
        <div className="mx-auto w-full">
            <div className="rounded-lg bg-white border p-2 shadow-lg sm:p-3 flex items-center justify-between">
                <div>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg bg-blue-600 p-2">
                                <AcademicCapIcon className="h-6 w-6 text-white"
                                                aria-hidden="true"/>
                            </span>
                            <p className="ml-3 truncate font-medium text-black">
                                {data.item.degree}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center mt-2 gap-4 text-gray-500 font-thin">
                        <p className="truncate">
                            {data.item.period}
                        </p>
                        |
                        <p className="truncate">
                            {data.item.institute}
                        </p>
                    </div>
                </div>
                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                    <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50"
                    >
                        What I have done here
                    </a>
                </div>
            </div>

        </div>
    )
}
