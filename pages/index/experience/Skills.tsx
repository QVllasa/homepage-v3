import SkillsAccordion from "../../components/accordion/SkillsAccordion";
import {ArrowSmallRightIcon, CheckBadgeIcon} from "@heroicons/react/24/outline";

const skills = [
    {
        id: 1,
        name: 'TypeScript',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckBadgeIcon,
    },
    {
        id: 2,
        name: 'PHP',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckBadgeIcon,
    },
    {
        id: 3,
        name: 'Python',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckBadgeIcon,
    },
]

export default function Skills() {
    return (
        <div className=" bg-white">
            <div className="relative mx-auto  py-24 ">
                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top
                            Skills.</h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            What I use to solve problems
                        </p>
                    </div>
                    <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
                        {skills.map((item) => (
                            <SkillsAccordion key={item.id} item={item}/>
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
