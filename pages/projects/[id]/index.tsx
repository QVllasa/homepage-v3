import {ProjectModel} from "../../../components/models/project.model";
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
    const {t} = useTranslation();
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
    };    // Safe function to get Alt text for images
    const getAltText = (text: any) => {
        if (typeof text === 'string') return text;
        if (text && typeof text === 'object' && 'en' in text) return text.en;
        return '';
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
            {/* Modern Hero Section */}
            <div className="relative">
                {/* Back Button */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-8 md:left-8 z-20">
                    <Link href="/" className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Zurück
                    </Link>
                </div>                {/* Hero Image Container - Constrained to content width on desktop */}
                <div className="md:max-w-7xl md:mx-auto md:px-3 md:sm:px-4 lg:px-6 xl:px-8">
                    <div className="relative h-48 sm:h-56 md:h-72 lg:h-80 xl:h-[420px] overflow-hidden md:rounded-lg">
                        <Image
                            className="w-full h-full object-cover"
                            src={data.img}
                            alt={getAltText(data.title)}
                            width={1200}
                            height={420}
                            priority
                            quality={90}
                        />
                        {/* Subtle bottom gradient only for mobile text overlay if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:hidden"/>
                    </div>
                </div>                {/* Content below image - better readability */}
                <div className="relative bg-white dark:bg-slate-800 -mt-6 sm:-mt-8 md:mt-0 mx-3 sm:mx-4 md:max-w-7xl md:mx-auto rounded-t-2xl md:rounded-none z-10 md:z-auto">
                    <div className="px-4 sm:px-6 md:px-3 lg:px-6 xl:px-8 pt-6 sm:pt-8 md:pt-8 pb-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
                            {useTranslatedContent(data.title)}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                            {useTranslatedContent(data.shortDescription)}
                        </p>
                    </div>
                </div>
            </div>            {/* Modern Content Section with proper spacing */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {/* Project Info Card */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                    {t('projects.projectInformation')}
                                </h2>
                                
                                {/* Live Preview Button - Always visible */}
                                {data.previewLink ? (
                                    <a 
                                        href={data.previewLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                        Live Demo
                                    </a>
                                ) : (
                                    <div className="relative group w-full sm:w-auto">
                                        <button 
                                            disabled
                                            className="inline-flex items-center justify-center px-4 py-2.5 sm:px-4 sm:py-2 bg-gray-400 text-gray-200 font-medium rounded-lg cursor-not-allowed text-sm sm:text-base w-full sm:w-auto"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                            Live Demo
                                        </button>
                                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                            Nur vor Ort verfügbar
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {data.client && (
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Kunde</p>
                                            <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">{useTranslatedContent(data.client)}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {data.status && (
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Status</p>
                                            <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                                {getTranslatedStatus(data.status)}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Stats */}
                            {data.stats && (
                                <div className="mt-6 sm:mt-8">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Leistungskennzahlen</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                        {data.stats.map((stat, idx) => (
                                            <div key={idx} className="bg-gray-50 dark:bg-slate-700 rounded-lg sm:rounded-xl border border-gray-200 dark:border-slate-600 p-3 sm:p-4">
                                                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{useTranslatedContent(stat.key)}</p>
                                                <p className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">{useTranslatedContent(stat.value)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>                        {/* Description */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Projektbeschreibung</h2>
                            <div className="prose prose-gray dark:prose-invert max-w-none prose-sm sm:prose-base">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                                    {useTranslatedContent(data.description)}
                                </p>
                            </div>
                        </div>                        {/* Tech Stack */}
                        {data.techStack && (
                            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    <span className="text-base sm:text-xl lg:text-2xl">Technologie-Stack</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    {data.techStack.map((stack, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-slate-700 rounded-lg sm:rounded-xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6">
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm sm:text-base">{useTranslatedContent(stack.category)}</h3>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {stack.technologies.map((tech, techIdx) => (
                                                    <span key={techIdx} className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm rounded-full font-medium border border-blue-200 dark:border-blue-800">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}                        {/* Skills & Competencies */}
                        {data.skills && (
                            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <span className="text-base sm:text-xl lg:text-2xl">Fähigkeiten & Kompetenzen</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    {data.skills.map((skill, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-slate-700 rounded-lg sm:rounded-xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6">
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm sm:text-base">{useTranslatedContent(skill.category)}</h3>
                                            <ul className="space-y-2">
                                                {skill.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="flex items-start text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}                        {/* Features/Benefits - Main Functionality */}
                        {data.keys && (
                            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    <span className="text-base sm:text-xl lg:text-2xl">Hauptfunktionen</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    {data.keys.map((key, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-slate-700 rounded-lg sm:rounded-xl border-l-4 border-l-blue-500 border-t border-r border-b border-gray-200 dark:border-gray-600 pl-4 sm:pl-6 p-4 sm:p-6">
                                            <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-2">{useTranslatedContent(key.value)}</h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{useTranslatedContent(key.description)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}                        {/* Challenges & Learnings Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

                            {/* Challenges */}
                            {data.challenges && (
                                <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6 lg:p-8">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-base sm:text-xl lg:text-2xl">Herausforderungen</span>
                                    </h2>
                                    <div className="space-y-4 sm:space-y-6">
                                        {data.challenges.map((challenge, idx) => (
                                            <div key={idx} className="border-l-4 border-orange-500 pl-4 sm:pl-6">
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{useTranslatedContent(challenge.title)}</h3>
                                                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{useTranslatedContent(challenge.description)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Learnings */}
                            {data.learnings && (
                                <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-600 p-4 sm:p-6 lg:p-8">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <span className="text-base sm:text-xl lg:text-2xl">Learnings</span>
                                    </h2>
                                    <div className="space-y-4 sm:space-y-6">
                                        {data.learnings.map((learning, idx) => (
                                            <div key={idx} className="border-l-4 border-purple-500 pl-4 sm:pl-6">                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{useTranslatedContent(learning.title)}</h3>
                                                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{useTranslatedContent(learning.description)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    );
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
