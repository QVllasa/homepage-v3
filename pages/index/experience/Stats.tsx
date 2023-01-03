export default function Stats() {
    return (
        <div className="overflow-hidden bg-white">
            <div className="relative mx-auto py-24">
                <div className="relative">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                <div
                                    className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Years</dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">4+</dd>
                                </div>
                                <div
                                    className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Projects</dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">8+</dd>
                                </div>
                                <div
                                    className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Code
                                        Languages
                                    </dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">5</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
