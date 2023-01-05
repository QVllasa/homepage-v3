export default function AboutMeSection() {
    return (
        <div className=" bg-white py-16 lg:py-24">
            <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                <div className="absolute inset-x-0 top-0 hidden h-1/2  lg:block" aria-hidden="true"/>
                <div className="mx-auto w-full h-auto max-w-screen-2xl bg-blue-600 lg:bg-transparent ">
                    <div className="lg:grid lg:grid-cols-12">
                        <div
                            className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                            <div className="absolute inset-x-0 h-1/2 bg-white lg:hidden" aria-hidden="true"/>
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                                    <img
                                        className="rounded-3xl object-cover shadow-2xl "
                                        style={{objectPosition: 'center 30%'}}
                                        src="/assets/me.JPG"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative bg-blue-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                            <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
                                 aria-hidden="true">


                            </div>
                            <div
                                className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                                <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">
                                    Always turn a problem into an opportunity.
                                </h2>
                                <p className="text-lg text-white">
                                    With the experience of yesterday, the ambition and motivation of today, I am
                                    fascinated for tomorrow and look almost euphorically towards a future in which IoT
                                    is known to everyone, product development is no longer imaginable without Virtual
                                    Twins and networked machines learn independently.
                                </p>
                                <a
                                    className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-blue-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                                    href="pages/index#"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
