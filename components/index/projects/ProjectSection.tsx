import {ProjectModel} from "../../models/project.model";
import Link from "next/link";
import {useState} from "react";
import {ArrowSmallDownIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import {Projects} from "../../../data/projects";
import {useTranslation} from 'next-i18next';
import {useTranslatedContent} from "../../../lib/useTranslatedContent";


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
        <div className={'dark:bg-slate-900'}>
            <div className="relative mx-auto py-16 lg:py-24 px-6 lg:max-w-7xl lg:px-8" id='projects'>
                <div className="absolute inset-0 ">
                    <div className="h-1/3  sm:h-2/3"/>
                </div>
                <div className="relative mx-auto max-w-3xl lg:max-w-7xl">
                    <div className="text-left lg:text-center">
                        <h2 className="text-3xl font-bold transition tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
                            {t('projects.heading')}
                        </h2>
                        <p className="mx-auto mt-3 transition lg:max-w-2xl text-xl text-gray-500 sm:mt-4 dark:text-slate-300">
                            {t('projects.subheading')}
                        </p>
                    </div>
                    <div className="mx-auto mt-12 grid  gap-5 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                        {projects?.map((project, index) => {
                            if (index < counter && index < projects.length) {
                                return (
                                    <Link key={index} href={`projects/${encodeURIComponent(project.id)}`}
                                         className="flex flex-col overflow-hidden rounded-lg border dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                                        <div className="flex-shrink-0 bg-white">                                            <Image className="h-48 w-full object-cover" width={640} height={400} src={project.img}
                                                   alt={typeof project.title === 'string' ? project.title : project.title?.en || ''}/>
                                        </div>
                                        <div
                                            className="flex transition flex-1 flex-col justify-between bg-white dark:bg-slate-800 p-6">
                                            <div className="flex-1">
                                                <div className="mt-2 block">
                                                    <p className="text-xl transition font-semibold text-gray-900 dark:text-white">
                                                        {useTranslatedContent(project.title)}
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
                                                                {useTranslatedContent(project.client)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className="my-3 transition text-base text-gray-500 dark:text-gray-400 line-clamp-4">
                                                        {useTranslatedContent(project.shortDescription)}
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
                                    </Link>
                                )
                            }
                        })}
                    </div>
                    <div className="flex justify-center mt-10">
                        {!hide && projects.length > counter && (
                            <div onClick={() => loadMore()}
                                 className="flex flex-grow-0 cursor-pointer items-center justify-center rounded-md border-2 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 transition hover:bg-slate-200 dark:hover:bg-slate-700 border-gray-300 px-8 py-2 text-sm font-medium dark:text-slate-100">
                                <ArrowSmallDownIcon className="mr-2 -ml-1 h-5 w-5"/>
                                {t('projects.loadMore')}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
