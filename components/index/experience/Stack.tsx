import {ArrowSmallRightIcon} from "@heroicons/react/24/outline";

export default function Stack() {
    return (
        <div className=" bg-white">
            <div className="relative mx-auto py-24 ">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className='col-span-1'>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Stack
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Technologies which I regularly use
                        </p>
                    </div>
                    <div className="mt-8 col-span-2 grid grid-cols-3 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                                className="max-h-12"
                                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                alt="Workcation"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                                className="max-h-12"
                                src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                                alt="Laravel"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                                className="max-h-12"
                                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                alt="StaticKit"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                                className="max-h-12"
                                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                                alt="Statamic"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end items-end mt-8'>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Show more
                        <ArrowSmallRightIcon className='h-5 w-5 ml-3'/>
                    </button>
                </div>
            </div>
        </div>
    )
}
