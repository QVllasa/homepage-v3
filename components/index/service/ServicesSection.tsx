import {ChartBarSquareIcon, CodeBracketIcon, PresentationChartLineIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {useTranslation} from 'next-i18next';

export default function ServicesSection() {
    const {t} = useTranslation();

    const services = [
        {
            name: t('services.items.consulting.title'),
            description: t('services.items.consulting.description'),
            link: '/skills/consulting',
            icon: PresentationChartLineIcon,
        },
        {
            name: t('services.items.development.title'),
            description: t('services.items.development.description'),
            link: '/skills/development',
            icon: CodeBracketIcon,
        },
        {
            name: t('services.items.analytics.title'),
            description: t('services.items.analytics.description'),
            link: '/skills/analytics',
            icon: ChartBarSquareIcon,
        },
    ]

    return (
        <div className="dark:bg-slate-900 py-16 lg:py-24" id={'services'}>
            <div className="relative mx-auto lg:max-w-7xl lg:px-8">

                <div className="lg:grid lg:grid-cols-12">
                    <div
                        className="relative  transition pt-24 bg-blue-600 dark:bg-yellow-500 lg:col-span-12 lg:grid lg:grid-cols-12 lg:items-center lg:rounded-3xl">
                        <div
                            className="relative z-10 lg:flex lg:flex-col lg:items-center mx-auto  space-y-6 px-4 sm:max-w-3xl sm:px-6 lg:col-span-6 lg:col-start-4 lg:p-0 mb-16">
                            <h2 className="text-3xl font-bold leading-8 transition tracking-tight text-white sm:text-4xl dark:text-slate-900">
                                {t('services.heading')}
                            </h2>
                            <p className="mx-auto mt-4 transition text-xl text-gray-200 dark:text-slate-800">
                                {t('services.subheading')}
                            </p>
                        </div>
                        <svg
                            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12 z-0"
                            width={404}
                            height={392}
                            fill="none"
                            viewBox="0 0 404 392"
                        >
                            <defs>
                                <pattern
                                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4}
                                          className="text-blue-500 transition dark:text-yellow-300"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                        </svg>
                        <div className="relative mx-auto sm:max-w-3xl lg:max-w-7xl space-y-6 px-4 w-full sm:py-16 sm:px-6 lg:col-span-12  lg:p-0">
                            <div className="lg:px-16 pb-36 pt-20 text-center">
                                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                                    {services.map((feature, index) => (
                                        <div key={index} className="pt-6">
                                            <Link href={feature.link}
                                                  className="flow-root transition-colors rounded-lg bg-white dark:bg-slate-800 px-6 pb-8 border dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span
                                                            className="inline-flex items-center justify-center rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 p-3">
                                                            <feature.icon
                                                                className="h-8 w-8 text-blue-600 dark:text-slate-300"
                                                                aria-hidden="true"/>
                                                        </span>
                                                    </div>
                                                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-slate-100">
                                                        {feature.name}
                                                    </h3>
                                                    <p className="text-sm leading-6 font-thin text-gray-600 dark:text-slate-300">{feature.description}</p>
                                                    <div className='flex justify-center items-end mt-8'>
                                                        <div
                                                            className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                                            <p className="flex items-center justify-center rounded-md dark:bg-slate-700 dark:text-slate-300  bg-white px-4 py-2 text-sm font-medium text-blue-600  hover:bg-blue-50"
                                                            >
                                                                {t('services.readMore')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
