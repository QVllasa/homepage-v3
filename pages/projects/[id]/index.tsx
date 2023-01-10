import {ProjectModel} from "../../../components/models/project.model";

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
]

const project: ProjectModel = {
        id: '1',
        title: 'Dronegraphy',
        description:'With dronegraphy I combine multiple passions of mine. As I love making impressing films and know how to code, this was some kind of natural outcome. Dronegraphy will be some kind of platform, in which people can buy and sell drone footage. In addition a forum will help drone lovers come together. As of now, dronegraphy is still in development as a side project of mine.',
        slug: '',
        keys: ['Modern and beautiful UI', 'Based on Angular and Symfony API Platform (PHP)','Combines my hobbies'],
        client: 'My Own Project',
        previewLink: 'www.dronegraphy.de',
        img: 'https://firebasestorage.googleapis.com/v0/b/my-homepage-f50b5.appspot.com/o/projects%2Fdronegraphy%2Fundraw_drone_race_-0-sim.svg?alt=media&token=4698a19f-eee6-4f85-998f-148b1abfec89',
        createAt: new Date('10.01.2023, 21:38:15'),
        updatedAt: new Date('10.01.2023, 21:38:15'),
    }

export default function ProjectDetails() {
    return (
        <div className="relative bg-white py-16 sm:py-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                <div className="relative sm:py-16 lg:py-0">
                    <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative overflow-hidden rounded-2xl pt-96 pb-10">
                            <img
                                className="absolute inset-0 h-full w-full object-cover"
                                src={project.img}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            On a mission to empower teams
                        </h2>
                        <div className="mt-6 space-y-6 text-gray-500">
                            <p className="text-lg">
                                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
                                porttitor vitae ut. Amet vitae fames senectus vitae.
                            </p>
                            <p className="text-base leading-7">
                                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                                pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique
                                eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu
                                viverra donec ut volutpat donec laoreet quam urna.
                            </p>
                            <p className="text-base leading-7">
                                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                                velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                                egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                            </p>
                        </div>
                    </div>

                    {/* Stats section */}
                    <div className="mt-10">
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-10">
                            <a href="#" className="text-base font-medium text-blue-600">
                                Learn more about how we're changing the world
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
