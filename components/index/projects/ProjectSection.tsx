import {ProjectModel} from "../../models/project.model";
import Link from "next/link";
import {useState} from "react";
import {ArrowSmallDownIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import {Projects} from "../../../data/projects";
import {useTranslation} from 'next-i18next';


export default function ProjectSection() {
    const {t} = useTranslation('common');
    const projectData: ProjectModel[] = Projects;
    const [projects, setProjects] = useState<ProjectModel[]>(projectData);
    const [counter, setCounter] = useState(6);
    const [hide, setHide] = useState(false);

    const loadMore = () => {
        counter < projectData.length ? setCounter(counter + 3) : setHide(true);
        setProjects(projectData)
    }


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
                                         className="flex transition flex-col overflow-hidden rounded-lg border dark:border-slate-700 hover:scale-101 transition">
                                        <div className="flex-shrink-0 bg-white">
                                            <Image className="h-48 w-full" width={640} height={400} src={project.img}
                                                   alt=""/>
                                        </div>
                                        <div
                                            className="flex transition flex-1 flex-col justify-between bg-white dark:bg-slate-800 p-6">
                                            <div className="flex-1">
                                                <div className="mt-2 block">
                                                    <div
                                                        className="flex justify-between items-center text-xl transition font-semibold text-gray-900 dark:text-slate-100">
                                                        <p>{project.title}</p>
                                                        {project?.status === 'On Hold' &&
                                                            <>
                                                                <span
                                                                    className={'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20'}>
                                                                    {t('projects.status.onHold')}
                                                                </span>
                                                            </>
                                                        }
                                                        {project?.status === 'Completed' &&
                                                            <>
                                                                <span
                                                                    className={'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'}>
                                                                    {t('projects.status.completed')}
                                                                </span>
                                                            </>
                                                        }
                                                        {project?.status === 'Canceled' &&
                                                            <>
                                                                <span
                                                                    className={'inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'}>
                                                                    {t('projects.status.canceled')}
                                                                </span>
                                                            </>
                                                        }
                                                        {project?.status === 'In Progress' &&
                                                            <>
                                                                <span
                                                                    className={'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'}>
                                                                    {t('projects.status.inProgress')}
                                                                </span>
                                                            </>
                                                        }</div>
                                                    <p className="mt-3 transition text-base text-gray-500 dark:text-slate-300">{project.slug}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })}
                    </div>
                    <div className={'flex w-full justify-center mt-12'}>
                        {hide ? null : <button
                            type='button'
                            onClick={loadMore}
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md transition border border-transparent bg-blue-600 dark:bg-yellow-500 dark:text-slate-900 px-4 py-2 text-base font-medium text-white  hover:bg-blue-700"
                        >
                            {t('projects.loadMore')}
                            <ArrowSmallDownIcon className='h-5 w-5 ml-3'/>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
