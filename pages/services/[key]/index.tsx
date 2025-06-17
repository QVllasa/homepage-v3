import {CheckCircleIcon,} from '@heroicons/react/24/outline'
import {useRouter} from "next/router";
import Image from "next/image";
import {Services} from "../../../data/services";
import {useTranslatedContent} from "../../../lib/useTranslatedContent";
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticPaths, GetStaticProps} from 'next';

export default function Service() {
    const router = useRouter();
    const {t} = useTranslation('common');
    const {key} = router.query;

    const service = Services.find(service => service.key === key);

    if (!service) {
        return <div>Service not found</div>
    }

    return (
        <div className="bg-white py-12 sm:py-16 lg:py-20 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">{useTranslatedContent(service.title)}</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        {useTranslatedContent(service.description)}
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {service.sections.map((section) => (
                            <div key={useTranslatedContent(section.title)} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-yellow-500">
                                        {section.img && (
                                            <div className="relative h-6 w-6 text-white dark:text-slate-900">
                                                <Image
                                                    src={section.img}
                                                    alt={useTranslatedContent(section.title)}
                                                    width={400}
                                                    height={400}
                                                    className="h-6 w-6"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    {useTranslatedContent(section.title)}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                                    <p className="flex-auto">
                                        {useTranslatedContent(section.description)}
                                    </p>
                                    <div className="mt-6">
                                        {section.keys && section.keys.map((key) => (
                                            <div key={useTranslatedContent(key.title)} className="mt-2 flex">
                                                <div className="flex-shrink-0">
                                                    <CheckCircleIcon
                                                        className="h-5 w-5 text-green-500 dark:text-green-400"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="ml-2">
                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">{useTranslatedContent(key.title)}</div>
                                                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                        {useTranslatedContent(key.description)}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {
    const paths = Services.flatMap(service =>
        locales ?
            locales.map(locale => ({
                params: {key: service.key},
                locale
            })) :
            [{params: {key: service.key}}]
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
