import {ProjectModel} from "../../../components/models/project.model";
import {CheckIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {Projects} from "../../../data/projects";
import {useTranslatedContent} from "../../../lib/useTranslatedContent";
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticPaths, GetStaticProps} from 'next';

export default function ProjectDetails() {
    const projectData: ProjectModel[] = Projects;
    const router = useRouter();
    const {t} = useTranslation('common');
    const {id} = router.query;

    const data = projectData.find(obj => obj.id === id);

    if (!data) return null;

    // Helper function for status translation
    const getTranslatedStatus = (status: string) => {
        switch (status) {
            case 'In Progress':
                return t('projects.status.inProgress');
            case 'Completed':
                return t('projects.status.completed');
            case 'On Hold':
                return t('projects.status.onHold');
            case 'Canceled':
                return t('projects.status.canceled');
            default:
                return status;
        }
    };

    // Safe function to get Alt text for images
    const getAltText = (text: any) => {
        if (typeof text === 'string') return text;
        if (text && typeof text === 'object' && 'en' in text) return text.en;
        return '';
    };

    return (
        <div className={''}>
            <div className="relative bg-white py-16 sm:py-24 dark:bg-slate-900">
                <div
                    className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 lg:overflow-visible">
                    <div className="relative sm:py-16 lg:py-0 lg:sticky lg:top-0">
                        <div aria-hidden="true"
                             className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"/>
                            <svg
                                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
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
                                              className="text-gray-200 dark:text-slate-800"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                                <Image
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src={data.img}
                                    alt={getAltText(data.title)}
                                    width={640}
                                    height={400}
                                />
                                <div className="absolute inset-0 bg-gray-500 mix-blend-multiply"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90"/>
                                <div className="relative px-8">
                                    <blockquote className="mt-8">
                                        <div className="relative text-lg font-medium text-white md:flex-grow">
                                            <svg
                                                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                            </svg>
                                            <p className="relative">
                                                {useTranslatedContent(data.shortDescription)}
                                            </p>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        {/* Content area */}
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                        {useTranslatedContent(data.title)}
                                    </h2>                                    <div className="bg-gray-50 dark:bg-slate-700 shadow-md rounded-lg mt-8 px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{t('projects.projectInformation')}</h3>

                                        <div className="mt-5 border-t border-gray-200">
                                            <dl className="divide-y divide-gray-200">
                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">{t('projects.client')}</dt>
                                                    <dd className="mt-1 flex text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                                        <span className="flex-grow">{useTranslatedContent(data.client)}</span>
                                                    </dd>
                                                </div>                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">{t('projects.statusLabel')}</dt>
                                                    <dd className="mt-1 flex text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                                        <span className="flex-grow">{getTranslatedStatus(data.status)}</span>
                                                    </dd>
                                                </div>
                                                {data.stats && data.stats.map((stat, idx) => (
                                                    <div key={idx}
                                                         className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">{useTranslatedContent(stat.key)}</dt>
                                                        <dd className="mt-1 flex text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                                            <span className="flex-grow">{useTranslatedContent(stat.value)}</span>
                                                        </dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative ml-4 flex-shrink-0 py-1 px-1 bg-white text-gray-600 hover:bg-gray-50 rounded-lg">                                        <Link href={'/'} className="group flex items-center py-2 px-3 text-sm font-medium">
                                            <span>{t('projects.backButton')}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {data.previewLink && (                                <a href={data.previewLink} target='_blank'
                                   className="mt-4 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    {t('projects.viewWebsite')}
                                </a>
                            )}

                            <div className="mt-6 space-y-6 text-gray-500 dark:text-gray-300">
                                <p className="">
                                    {useTranslatedContent(data.description)}
                                </p>
                            </div>
                        </div>

                        {/* Key Metrics section */}
                        <div className="mt-10">
                            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                                {data.keys && data.keys.map((key, idx) => (
                                    <div key={idx}
                                         className="border-t border-gray-200 pt-6 dark:border-gray-600">
                                        <dt className="text-base font-medium text-gray-900 dark:text-white">{useTranslatedContent(key.value)}</dt>
                                        <dd className="mt-2 text-sm text-gray-500 dark:text-gray-300">{useTranslatedContent(key.description)}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        {/* Testimonial section */}
                        <div className="mt-16">
                            <div
                                className="p-4 shadow-lg dark:shadow-none dark:border border-slate-600 rounded-md bg-gray-50 dark:bg-slate-800">
                                <div className="relative flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="h-10 w-10 flex bg-blue-600 items-center justify-center rounded-full">
                                            <CheckIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </span>
                                    </div>
                                    <div className="ml-4 dark:text-gray-300">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
    const paths = Projects.flatMap(project =>
        locales ?
            locales.map(locale => ({
                params: {id: project.id},
                locale
            })) :
            [{params: {id: project.id}}]
    );

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'en', ['common'])),
        },
    };
}
