import MegaphoneIcon from '@heroicons/react/20/solid/MegaphoneIcon';
import XMarkIcon from '@heroicons/react/20/solid/XMarkIcon';
import {
    ArrowSmallRightIcon,
    ChatBubbleBottomCenterTextIcon,
    CheckBadgeIcon,
    EnvelopeIcon,
    BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import ExperienceAccordion from "../Accordion/ExperienceAccordion";
import SkillsAccordion from "../Accordion/SkillsAccordion";
import EducationAccordion from "../Accordion/EducationAccordion";
import Skills from "../ExperienceSection/Skills";
import Stack from "../ExperienceSection/Stack";
import Stats from "../ExperienceSection/Stats";
import Experience from "../ExperienceSection/Experience";
import Education from "../ExperienceSection/Education";





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
        <div className="overflow-hidden bg-white py-16 lg:py-24">
            <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">

                {/*Intro*/}

                    <div className="relative">
                        <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            About my Skills and Experience
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
                            Only sky is the limit...
                        </p>
                    </div>

                <div className='divide-y'>
                    <Stats/>
                    <Skills/>
                    <Experience/>
                    <Education />
                    <Stack/>
                </div>


            </div>
        </div>
    )
}


