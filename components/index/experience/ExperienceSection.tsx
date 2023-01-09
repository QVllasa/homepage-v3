import {ChatBubbleBottomCenterTextIcon, EnvelopeIcon} from '@heroicons/react/24/outline'
import Skills from "./Skills";
import Stack from "./Stack";
import Stats from "./Stats";
import Experience from "./Experience";
import Education from "./Education";


const communicationFeatures = [
    {
        id: 1,
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        id: 2,
        name: 'Reminder emails',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: EnvelopeIcon,
    },
]

export default function ExperienceSection() {
    return (
        <div className=" bg-white py-16 lg:py-24">
            <div className="relative mx-auto w-auto lg:max-w-7xl lg:px-8">
                <div className="relative lg:flex lg:flex-col lg:items-center mx-auto max-w-md space-y-6 px-4 sm:max-w-3xl sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                    <h2 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        About my Skills and Experience
                    </h2>
                    <p className="mx-auto mt-4  text-xl text-gray-500">
                        Only sky is the limit...
                    </p>
                </div>
                <div className=' divide-y'>
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


