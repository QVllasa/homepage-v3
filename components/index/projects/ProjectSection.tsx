import {ProjectModel} from "../../models/project.model";
import {CheckCircleIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

const projects: ProjectModel[] = [
    {
        id: '1',
        title: 'Dronegraphy',
        description: 'With dronegraphy I combine multiple passions of mine. As I love making impressing films and know how to code, this was some kind of natural outcome. Dronegraphy will be some kind of platform, in which people can buy and sell drone footage. In addition a forum will help drone lovers come together. As of now, dronegraphy is still in development as a side project of mine.',
        slug: 'To combine my love for flying my drone and developing my skills, I am working on a platform where pilots can sell their footage. For the development of the platform I use the programming language GO together in a microservice architecture. For the frontend Angular is used.',
        keys: [{
            icon: CheckCircleIcon,
            value: 'Modern and beautiful UI',
            description: 'some description'
        }, {
            icon: CheckCircleIcon,
            value: 'Based on Angular and Symfony API Platform (PHP)',
            description: 'some description'
        }, {icon: CheckCircleIcon, value: 'Combines my hobbies', description: 'some description'}],
        stats: [{key: 'Started', value: '2020'}, {key: 'Technologies', value: '4'}, {
            key: 'Planned Release',
            value: '2023'
        }],
        client: 'My Own Project',
        previewLink: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/my-homepage-f50b5.appspot.com/o/projects%2Fdronegraphy%2F5f85ab1852c24_drone.svg?alt=media&token=aa1fed7f-dd5d-43d3-a509-8f1c861f6f2d',
        createAt: new Date('10.01.2023, 21:38:15'),
        updatedAt: new Date('10.01.2023, 21:38:15'),
    },
    {
        id: '2',
        title: 'Dronegraphy',
        description: 'With dronegraphy I combine multiple passions of mine. As I love making impressing films and know how to code, this was some kind of natural outcome. Dronegraphy will be some kind of platform, in which people can buy and sell drone footage. In addition a forum will help drone lovers come together. As of now, dronegraphy is still in development as a side project of mine.',
        slug: 'To combine my love for flying my drone and developing my skills, I am working on a platform where pilots can sell their footage. For the development of the platform I use the programming language GO together in a microservice architecture. For the frontend Angular is used.',
        keys: [{
            icon: CheckCircleIcon,
            value: 'Modern and beautiful UI',
            description: 'some description'
        }, {
            icon: CheckCircleIcon,
            value: 'Based on Angular and Symfony API Platform (PHP)',
            description: 'some description'
        }, {icon: CheckCircleIcon, value: 'Combines my hobbies', description: 'some description'}],
        stats: [{key: 'Started', value: '2020'}, {key: 'Technologies', value: '4'}, {
            key: 'Planned Release',
            value: '2023'
        }],
        client: 'My Own Project',
        previewLink: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/my-homepage-f50b5.appspot.com/o/projects%2Fdronegraphy%2F5f85ab1852c24_drone.svg?alt=media&token=aa1fed7f-dd5d-43d3-a509-8f1c861f6f2d',
        createAt: new Date('10.01.2023, 21:38:15'),
        updatedAt: new Date('10.01.2023, 21:38:15'),
    },
    {
        id: '3',
        title: 'Dronegraphy',
        description: 'With dronegraphy I combine multiple passions of mine. As I love making impressing films and know how to code, this was some kind of natural outcome. Dronegraphy will be some kind of platform, in which people can buy and sell drone footage. In addition a forum will help drone lovers come together. As of now, dronegraphy is still in development as a side project of mine.',
        slug: 'To combine my love for flying my drone and developing my skills, I am working on a platform where pilots can sell their footage. For the development of the platform I use the programming language GO together in a microservice architecture. For the frontend Angular is used.',
        keys: [{
            icon: CheckCircleIcon,
            value: 'Modern and beautiful UI',
            description: 'some description'
        }, {
            icon: CheckCircleIcon,
            value: 'Based on Angular and Symfony API Platform (PHP)',
            description: 'some description'
        }, {icon: CheckCircleIcon, value: 'Combines my hobbies', description: 'some description'}],
        stats: [{key: 'Started', value: '2020'}, {key: 'Technologies', value: '4'}, {
            key: 'Planned Release',
            value: '2023'
        }],
        client: 'My Own Project',
        previewLink: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/my-homepage-f50b5.appspot.com/o/projects%2Fdronegraphy%2F5f85ab1852c24_drone.svg?alt=media&token=aa1fed7f-dd5d-43d3-a509-8f1c861f6f2d',
        createAt: new Date('10.01.2023, 21:38:15'),
        updatedAt: new Date('10.01.2023, 21:38:15'),
    },{
        id: '4',
        title: 'Dronegraphy',
        description: 'With dronegraphy I combine multiple passions of mine. As I love making impressing films and know how to code, this was some kind of natural outcome. Dronegraphy will be some kind of platform, in which people can buy and sell drone footage. In addition a forum will help drone lovers come together. As of now, dronegraphy is still in development as a side project of mine.',
        slug: 'To combine my love for flying my drone and developing my skills, I am working on a platform where pilots can sell their footage. For the development of the platform I use the programming language GO together in a microservice architecture. For the frontend Angular is used.',
        keys: [{
            icon: CheckCircleIcon,
            value: 'Modern and beautiful UI',
            description: 'some description'
        }, {
            icon: CheckCircleIcon,
            value: 'Based on Angular and Symfony API Platform (PHP)',
            description: 'some description'
        }, {icon: CheckCircleIcon, value: 'Combines my hobbies', description: 'some description'}],
        stats: [{key: 'Started', value: '2020'}, {key: 'Technologies', value: '4'}, {
            key: 'Planned Release',
            value: '2023'
        }],
        client: 'My Own Project',
        previewLink: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/my-homepage-f50b5.appspot.com/o/projects%2Fdronegraphy%2F5f85ab1852c24_drone.svg?alt=media&token=aa1fed7f-dd5d-43d3-a509-8f1c861f6f2d',
        createAt: new Date('10.01.2023, 21:38:15'),
        updatedAt: new Date('10.01.2023, 21:38:15'),
    }
]

export default function ProjectSection() {
    return (
        <div className="relative mx-auto py-16 lg:py-24 px-6 lg:max-w-7xl lg:px-8" id='projects'>
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-3xl lg:max-w-7xl">
                <div className="text-left lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Some of My latest Projects</h2>
                    <p className="mx-auto mt-3 lg:max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Growing with every project
                    </p>
                </div>
                <div className="mx-auto mt-12 grid  gap-5 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={project.img} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <Link href={`/projects/${encodeURIComponent(project.id)}`} className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{project.slug}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
