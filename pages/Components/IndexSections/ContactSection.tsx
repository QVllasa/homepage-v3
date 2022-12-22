export default function ContactSection(){
    return (
        <div className="relative  sm:mt-32 sm:py-16">
            <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-blue-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
                    <div className="relative">
                        <div className="sm:text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Get notified when we&rsquo;re launching.
                            </h2>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-rose-100">
                                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                                tristique pellentesque.
                            </p>
                        </div>
                        <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                            <div className="min-w-0 flex-1">
                                <label htmlFor="cta-email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="cta-email"
                                    type="email"
                                    className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-3">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                                >
                                    Notify me
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
