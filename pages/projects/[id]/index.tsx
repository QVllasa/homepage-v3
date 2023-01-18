import {ProjectModel} from "../../../components/models/project.model";
import {CheckCircleIcon} from "@heroicons/react/24/outline";

const project: ProjectModel = {
    order: 0,
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
    updatedAt: new Date('10.01.2023, 21:38:15')
}

export default function ProjectDetails() {
    return (
        <div className="relative bg-white py-16 sm:py-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                <div className="relative sm:py-16 lg:py-0">
                    <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
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
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                        </svg>
                    </div>
                    <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                        <div className="relative overflow-hidden rounded-2xl pt-96 pb-10 shadow-xl">
                            <img
                                className="absolute inset-0 h-full w-full object-cover"
                                src={project.img}
                                alt=""
                            />
                            <div className="absolute inset-0 bg-blue-500 mix-blend-multiply"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-600 opacity-90"/>
                        </div>
                        <button
                            disabled={!project.previewLink}
                            type="button"
                            className="mx-auto disabled:bg-gray-300 mt-4 block  rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
                        >
                            Live Preview
                        </button>
                    </div>
                </div>

                <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {project.title}
                        </h2>
                        <div className="mt-6 space-y-6 text-gray-500">
                            <p className="text-lg">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 space-y-10">
                        {project.keys.map((item, index) => (
                            <div key={index} className="relative">
                                <dt>
                                    <div
                                        className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
                                        <item.icon className="h-8 w-8" aria-hidden="true"/>
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.value}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{'some description'}</dd>
                            </div>
                        ))}
                    </div>

                    {/* Stats section */}
                    <div className="mt-10">
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                            {project.stats.map((stat, index) => (
                                <div key={index} className="border-t-2 border-gray-100 pt-6">
                                    <dt className="text-base font-medium text-gray-500">{stat.key}</dt>
                                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
