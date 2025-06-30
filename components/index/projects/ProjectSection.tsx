import {ProjectModel} from "../../models/project.model";
import Link from "next/link";
import {useState} from "react";
import {ArrowSmallDownIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import {Projects} from "../../../data/projects";
import {useTranslation} from 'next-i18next';
import {useTranslatedContent} from "../../../lib/useTranslatedContent";

// Helper component to avoid hook violations
function ProjectItem({project, getTranslatedStatus, t}: { project: ProjectModel, getTranslatedStatus: (status: string) => string, t: any }) {
    const title = useTranslatedContent(project.title);
    const client = useTranslatedContent(project.client);
    const shortDescription = useTranslatedContent(project.shortDescription);

    return (
        <div className="flex transition flex-col overflow-hidden rounded-lg shadow-lg bg-white dark:bg-slate-800 h-full">
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
                        <p className="my-3 transition text-base text-gray-500 dark:text-gray-400 line-clamp-3">
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

export default function ProjectSection() {
    const {t} = useTranslation();
    const projectData: ProjectModel[] = Projects;
    const [projects, setProjects] = useState<ProjectModel[]>(projectData);
    const [counter, setCounter] = useState(6);
    const [hide, setHide] = useState(false);

    const loadMore = () => {
        counter < projectData.length ? setCounter(counter + 3) : setHide(true);
        setProjects(projectData)
    }

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
        <div className={'bg-white dark:bg-slate-900 pt-16 sm:pt-24 lg:pt-32'}>
            <div className="relative mx-auto  px-6 lg:max-w-7xl lg:px-8" id='projects'>
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl transition font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            {t('projects.title')}
                        </h2>
                        <p className="mt-4 text-lg transition text-gray-500 dark:text-gray-400">
                            {t('projects.description')}
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {projects.slice(0, counter).map((project) => (
                        <Link key={project.id} href={`/projects/${project.id}`} className="group cursor-pointer">
                            <ProjectItem project={project} getTranslatedStatus={getTranslatedStatus} t={t}/>
                        </Link>
                    ))}
                </div>

                {/* Load More Button */}
                {!hide && (
                    <div className="text-center mt-8 mb-16">
                        <button
                            onClick={loadMore}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                            <ArrowSmallDownIcon className="w-5 h-5 mr-2"/>
                            {t('projects.loadMore')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
