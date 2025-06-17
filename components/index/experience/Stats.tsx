export default function Stats() {
    return (
        <div className="overflow-hidden">
            <div className="relative mx-auto py-24">
                <div className="relative">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <dl className="rounded-lg border transition dark:border-slate-700 sm:grid sm:grid-cols-3">
                                <div
                                    className="flex flex-col transition border-b border-gray-100 dark:border-slate-700 p-6 text-center sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-medium transition leading-6 text-gray-500 dark:text-slate-200">Years</dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight transition text-blue-600 dark:text-yellow-500">6+</dd>
                                </div>
                                <div
                                    className="flex flex-col border-t transition border-b border-gray-100 dark:border-slate-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-medium transition leading-6 text-gray-500 dark:text-slate-200">Projects</dt>
                                    <dd className="order-1 text-5xl font-bold transition tracking-tight text-blue-600 dark:text-yellow-500">12+</dd>
                                </div>
                                <div
                                    className="flex transition flex-col border-t border-gray-100 dark:border-slate-700 p-6 text-center sm:border-0 sm:border-l">
                                    <dt className="order-2 mt-2 text-lg transition font-medium leading-6 text-gray-500 dark:text-slate-200">Code
                                        Languages
                                    </dt>
                                    <dd className="order-1 text-5xl transition font-bold tracking-tight text-blue-600 dark:text-yellow-500">5+</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
