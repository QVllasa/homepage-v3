import MegaphoneIcon from '@heroicons/react/20/solid/MegaphoneIcon';
import XMarkIcon from '@heroicons/react/20/solid/XMarkIcon';
import {
    ArrowSmallRightIcon,
    ChatBubbleBottomCenterTextIcon,
    CheckBadgeIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline'

const transferFeatures = [
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

export default function Experience() {
    return (
        <div className="overflow-hidden bg-white py-16 lg:py-24">
            <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                <div className="relative">
                    <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        About my Skills and Experience
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
                        Only sky is the limit...
                    </p>
                </div>
                <div className="mt-10 bg-white pb-12 sm:pb-16">
                    <div className="relative">
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-4xl">
                                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                    <div
                                        className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Years</dt>
                                        <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">4+</dd>
                                    </div>
                                    <div
                                        className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Projects</dt>
                                        <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">8+</dd>
                                    </div>
                                    <div
                                        className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Code Languages</dt>
                                        <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">5</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden bg-white">
                    <div className="relative mx-auto  py-24 sm:py-32  lg:py-40">
                        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                            <div className="lg:col-span-1">
                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top
                                    Skills.</h2>
                            </div>
                            <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
                                {transferFeatures.map((feature) => (
                                    <div key={feature.name}>
                                        <dt>
                                            <div
                                                className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                                                <feature.icon className="h-8 w-8" aria-hidden="true"/>
                                            </div>
                                            <p className="mt-6 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                                    </div>
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
                <div className="overflow-hidden bg-white">
                    <div className="relative mx-auto ">
                        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                            <div className="lg:col-span-1">
                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience.</h2>
                            </div>
                            <dl className="grid grid-cols-1 gap-4 lg:col-span-2 lg:mt-0">
                                {transferFeatures.map(() => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="mx-auto w-full">
                                        <div className="rounded-lg bg-white border p-2 shadow-lg sm:p-3">
                                            <div className="flex flex-wrap items-center justify-between">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <span className="flex rounded-lg bg-blue-800 p-2">
                                                        <MegaphoneIcon className="h-6 w-6 text-white"
                                                                       aria-hidden="true"/>
                                                    </span>
                                                    <p className="ml-3 truncate font-medium text-black">
                                                        <span className="md:hidden">We announced a new product!</span>
                                                        <span className="hidden md:inline">Big news! Were excited to
                                                            announce a brand new product.</span>
                                                    </p>
                                                </div>
                                                <div
                                                    className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                                    <a
                                                        href="#"
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50"
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                                                    <button
                                                        type="button"
                                                        className="-mr-1 flex rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
                                                    >
                                                        <span className="sr-only">Dismiss</span>
                                                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                <div className="overflow-hidden bg-white">
                    <div className="relative mx-auto ">
                        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                            <div className="lg:col-span-1">
                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education.</h2>
                            </div>
                            <dl className="grid grid-cols-1 gap-4 lg:col-span-2 lg:mt-0">
                                {transferFeatures.map(() => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="mx-auto w-full">
                                        <div className="rounded-lg bg-white border p-2 shadow-lg sm:p-3">
                                            <div className="flex flex-wrap items-center justify-between">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <span className="flex rounded-lg bg-blue-800 p-2">
                                                        <MegaphoneIcon className="h-6 w-6 text-white"
                                                                       aria-hidden="true"/>
                                                    </span>
                                                    <p className="ml-3 truncate font-medium text-black">
                                                        <span className="md:hidden">We announced a new product!</span>
                                                        <span className="hidden md:inline">Big news! Were excited to
                                                            announce a brand new product.</span>
                                                    </p>
                                                </div>
                                                <div
                                                    className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                                    <a
                                                        href="#"
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50"
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                                                    <button
                                                        type="button"
                                                        className="-mr-1 flex rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
                                                    >
                                                        <span className="sr-only">Dismiss</span>
                                                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </dl>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


