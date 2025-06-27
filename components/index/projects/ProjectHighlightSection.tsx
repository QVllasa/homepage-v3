import {ProjectModel} from "../../models/project.model";
import Link from "next/link";
import Image from "next/image";
import {Projects} from "../../../data/projects";
import {useTranslation} from 'next-i18next';
import {useTranslatedContent} from "../../../lib/useTranslatedContent";

// Helper component to avoid hook violations
function ProjectHighlightItem({project, getTranslatedStatus, t}: { project: ProjectModel, getTranslatedStatus: (status: string) => string, t: any }) {
    const title = useTranslatedContent(project.title);
    const client = useTranslatedContent(project.client);
    const shortDescription = useTranslatedContent(project.shortDescription);

    return (
        <div className="flex transition flex-col overflow-hidden rounded-lg shadow-lg bg-white dark:bg-slate-800">
            <div className="flex-shrink-0">
                <Image className="h-48 w-full object-cover" width={600} height={192} src={project.img}
                       alt={typeof project.title === 'string' ? project.title : project.title?.en || ''}/>
            </div>
            <div className="flex transition flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                    <div className="mt-2 block">
                        <p className="text-xl transition font-semibold text-gray-900 dark:text-white">
                            {title}
                        </p>
                        <div className="mt-3 flex items-center">
                            <div className="flex-shrink-0">
                                <span
                                    className="inline-flex transition items-center rounded-full bg-green-50 dark:bg-green-900 dark:text-green-100 px-2 py-1 text-xs font-medium text-green-700">
                                    {getTranslatedStatus(project.status)}
                                </span>
                            </div>
                            <div className="ml-2">
                                <p className="transition text-sm text-gray-500 dark:text-gray-400">
                                    {client}
                                </p>
                            </div>
                        </div>
                        <p className="my-3 transition text-base text-gray-500 dark:text-gray-400 line-clamp-4">
                            {shortDescription}
                        </p>
                    </div>
                </div>
                <div className={'mt-4'}>
                    <div
                        className="transition hover:bg-slate-200 flex w-full items-center justify-center rounded-md border border-transparent py-2 px-8 text-center text-sm font-medium dark:text-slate-100 dark:hover:bg-slate-700">
                        {t('projects.viewDetails')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectHighlightSection() {
    const {t} = useTranslation();
    // Wir nehmen nur die ersten 3 Projekte oder die mit den höchsten Prioritäten
    const highlightProjects: ProjectModel[] = Projects.slice(0, 3);

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

    return (
        <div className={'dark:bg-slate-900 pt-16 sm:pt-24 lg:pt-12'}>
            <div className="relative mx-auto  px-6 lg:max-w-7xl lg:px-8" id='project-highlights'>
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl transition font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            {t('projects.highlights.title')}
                        </h2>
                        <p className="mt-4 text-lg transition text-gray-500 dark:text-gray-400">
                            {t('projects.highlights.description')}
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {highlightProjects.map((project) => (
                        <Link key={project.id} href={`/projects/${project.id}`} className="group cursor-pointer">
                            <ProjectHighlightItem project={project} getTranslatedStatus={getTranslatedStatus} t={t}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
