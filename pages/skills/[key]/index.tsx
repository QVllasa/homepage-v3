import {CheckCircleIcon,} from '@heroicons/react/24/outline'
import {useRouter} from "next/router";
import Image from "next/image";
import {Services} from "../../../data/services";
import {useTranslatedContent} from "../../../lib/useTranslatedContent";
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticPaths, GetStaticProps} from 'next';

export default function Skill() {
    const router = useRouter();
    const {t} = useTranslation();
    const {key} = router.query;

    const skill = Services.find(service => service.key === key);
    
    if (!skill) {
        return <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skill nicht gefunden</h1>
                <p className="text-gray-600 dark:text-gray-400">Die angeforderte Fähigkeit existiert nicht.</p>
            </div>
        </div>
    }

    return (        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 py-12 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Enhanced Header Section */}
                <div className="mx-auto max-w-4xl text-center mb-16 lg:mb-24">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        Expertise
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        {useTranslatedContent(skill.title)}
                    </h1>
                    <p className="text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {useTranslatedContent(skill.description)}
                    </p>
                </div>

                {/* Enhanced Skills Grid */}                <div className="mx-auto mt-16 lg:mt-24">
                    <div className={`grid gap-8 xl:gap-12 ${
                        skill.sections.length === 1 
                            ? "grid-cols-1 max-w-2xl mx-auto" 
                            : skill.sections.length === 2 
                            ? "grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto"
                            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    }`}>                        {skill.sections.map((section, idx) => (
                            <div key={idx} className="relative bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-slate-600 p-8 overflow-hidden">
                                {/* Content */}
                                <div className="relative z-10">                                    {/* Modern Icon Container */}
                                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-yellow-400 dark:to-yellow-500">
                                        {/* Dynamic icons based on section title */}
                                        {useTranslatedContent(section.title).toLowerCase().includes('web') || useTranslatedContent(section.title).toLowerCase().includes('anwendung') ? (
                                            <svg className="h-8 w-8 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        ) : useTranslatedContent(section.title).toLowerCase().includes('teaching') || useTranslatedContent(section.title).toLowerCase().includes('lehre') ? (
                                            <svg className="h-8 w-8 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                            </svg>
                                        ) : useTranslatedContent(section.title).toLowerCase().includes('desktop') ? (
                                            <svg className="h-8 w-8 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                                            </svg>
                                        ) : useTranslatedContent(section.title).toLowerCase().includes('website') ? (
                                            <svg className="h-8 w-8 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        ) : useTranslatedContent(section.title).toLowerCase().includes('analytics') || useTranslatedContent(section.title).toLowerCase().includes('business') ? (
                                            <svg className="h-8 w-8 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                            </svg>
                                        ) : useTranslatedContent(section.title).toLowerCase().includes('research') || useTranslatedContent(section.title).toLowerCase().includes('forschung') ? (
                                            <svg className="h-8 w-8 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        ) : (
                                            <svg className="h-8 w-8 text-white dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                        )}
                                    </div>

                                    {/* Title with improved typography */}
                                    <h3 className="text-2xl font-bold leading-8 text-gray-900 dark:text-white mb-4">
                                        {useTranslatedContent(section.title)}
                                    </h3>

                                    {/* Description with better spacing */}
                                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300 mb-8">
                                        {useTranslatedContent(section.description)}
                                    </p>

                                    {/* Enhanced Key Points */}
                                    {section.keys && (
                                        <div className="space-y-6">
                                            {section.keys.map((key, keyIdx) => (
                                                <div key={keyIdx} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-700/50">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="h-6 w-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                                            <CheckCircleIcon
                                                                className="h-4 w-4 text-green-600 dark:text-green-400"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                                                            {useTranslatedContent(key.title)}
                                                        </h4>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                            {useTranslatedContent(key.description)}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
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
