import {CloudArrowUpIcon, LockClosedIcon} from "@heroicons/react/24/outline";
import {ArrowPathIcon} from "@heroicons/react/24/solid";

const services = [
    {
        name: 'IT Consulting',
        description: 'Optimize you process.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Web Application Development',
        description: 'Development of tailor-made software.',
        icon: LockClosedIcon,
    },
    {
        name: 'Business Research & Analytics',
        description: 'Insight about your data.',
        icon: ArrowPathIcon,
    },
]

export default function ServicesSection() {
    return (
        <div className="relative bg-white py-16">
            <div className="absolute inset-x-0 top-0 hidden h-1/2  lg:block" aria-hidden="true" />
            <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-12">
                    <div className="relative bg-yellow-400 lg:col-span-12 lg:grid lg:grid-cols-12 lg:items-center lg:rounded-3xl">
                        <div className="relative col-span-12 justify-center mt-36">
                            <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-black sm:text-4xl">
                                What I can do for you
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-800">
                                Using cutting edge technologies
                            </p>
                        </div>
                        <div className="relative mx-auto  space-y-6 px-4 w-full sm:py-16 sm:px-6 lg:col-span-12 lg:max-w-none lg:p-0">
                            <div className=" px-16 pb-36 pt-20 text-center">
                                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                                    {services.map((feature, index) => (
                                        <div key={index} className="pt-6">
                                            <div className="flow-root rounded-lg bg-white px-6 pb-8 shadow-xl shadow-amber-400 hover:shadow-2xl transition-all hover:shadow-amber-600 hover:scale-105 ">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span className="inline-flex items-center justify-center rounded-xl bg-blue-600 p-3 shadow-lg">
                                                            <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                                                        {feature.name}
                                                    </h3>
                                                    <p className="text-sm leading-6 font-thin text-gray-600">{feature.description}</p>
                                                    <div className='flex justify-center items-end mt-8'>
                                                        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                                            <a
                                                                href="components/IndexSections#"
                                                                className="flex items-center justify-center rounded-md   bg-white px-4 py-2 text-sm font-medium text-blue-600  hover:bg-blue-50"
                                                            >
                                                                Read more
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
