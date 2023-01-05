import ExperienceAccordion from "../../accordion/ExperienceAccordion";
import {ArrowSmallRightIcon, BuildingOfficeIcon} from "@heroicons/react/24/outline";


const experience = [
    {
        id: 1,
        role: 'Lead Software Engineer',
        company: 'newboxes solutions GmbH',
        period: 'Dez 2021 - Mar 2023',
        description: 'As the lead developer in cloud transformation, I was responsible for implementing projects for customers with best practice development and state of the art technologies.',
        icon: BuildingOfficeIcon
    },
    {
        id: 1,
        role: 'Project Lead & Software Engineer',
        company: 'newboxes solutions GmbH',
        period: 'Dez 2021 - Mar 2023',
        description: 'As the lead developer in cloud transformation, I was responsible for implementing projects for customers with best practice development and state of the art technologies.',
        icon: BuildingOfficeIcon
    },
    {
        id: 1,
        role: 'Lead Software Engineer',
        company: 'newboxes solutions GmbH',
        period: 'Dez 2021 - Mar 2023',
        description: 'As the lead developer in cloud transformation, I was responsible for implementing projects for customers with best practice development and state of the art technologies.',
        icon: BuildingOfficeIcon
    },
    {
        id: 1,
        role: 'Lead Software Engineer',
        company: 'newboxes solutions GmbH',
        period: 'Dez 2021 - Mar 2023',
        description: 'As the lead developer in cloud transformation, I was responsible for implementing projects for customers with best practice development and state of the art technologies.',
        icon: BuildingOfficeIcon
    },
]
export default function Experience(){
    return (
        <div className=" bg-white">
            <div className="relative mx-auto py-24 ">
                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience.</h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Where I applied and gained my skills
                        </p>
                    </div>
                    <dl className="mt-20 grid grid-cols-1 gap-4 lg:col-span-2 lg:mt-0">
                        {experience.map((item) => (
                            <ExperienceAccordion key={item.id} item={item} />
                        ))}
                        <div className='flex justify-end items-end mt-8'>
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Show more
                                <ArrowSmallRightIcon className='h-5 w-5 ml-3'/>
                            </button>
                        </div>
                    </dl>

                </div>

            </div>
        </div>
    )
}
