export default function ContactSection(){
    return (
        <div className="relative mx-auto py-16 lg:py-24 px-6 lg:max-w-7xl lg:px-8">
            <div className="relative mx-auto max-w-xl  lg:max-w-7xl lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-yellow-400 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
                    <div className="relative">
                        <div className="sm:text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                                Project in mind?
                                <br/>
                                Let's talk!
                            </h2>
                            <p className="mx-auto mt-6 max-w-2xl text-lg ">
                                Let me reach out to you by droping your e-mail
                            </p>
                        </div>
                        <form action="components/IndexSections#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                            <div className="min-w-0 flex-1">
                                <label htmlFor="cta-email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="cta-email"
                                    type="email"
                                    className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-3">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
                                >
                                    Yes, reach out to me!
                                </button>
                            </div>
                        </form>
                        <div className="flex flex-col items-center justify-center mt-8">
                            <span className='text-black text-lg'>or contact me directly</span>
                            <br/>
                            <a
                                className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-blue-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                                href="pages#"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
