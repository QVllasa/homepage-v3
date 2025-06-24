import Image from "next/image";
import {useTranslation} from 'next-i18next';
import Link from "next/link";

export default function AboutMeSection() {
    const {t} = useTranslation();

    return (
        <div className=" bg-white transition dark:bg-slate-900 py-16 lg:py-24">
            <div className="relative mx-auto w-auto lg:max-w-7xl lg:px-8">
                <div
                    className="relative lg:flex lg:flex-col lg:items-center mx-auto max-w-md space-y-6 px-4 sm:max-w-3xl sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0 mb-16">
                    <h2 className="text-3xl font-bold transition leading-8 tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
                        {t('about.howIWork')}
                    </h2>
                    <p className="mx-auto mt-4  text-xl transition text-gray-500 dark:text-slate-200">
                        {t('about.whatDrivesMe')}
                    </p>
                </div>
                <div className="absolute inset-x-0 top-0 hidden h-1/2  lg:block" aria-hidden="true"/>
                <div
                    className="mx-auto w-full h-auto max-w-screen-2xl bg-blue-600 dark:bg-yellow-500  lg:bg-transparent rounded-3xl">
                    <div className="lg:grid lg:grid-cols-12">
                        <div
                            className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent dark:lg:bg-transparent lg:py-16">
                            <div className="absolute inset-x-0 h-1/2 bg-white dark:bg-slate-900 lg:hidden"
                                 aria-hidden="true"/>
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                                    <Image
                                        width={640}
                                        height={400}
                                        className="rounded-3xl object-cover shadow-2xl "
                                        style={{objectPosition: 'center 30%'}}
                                        src="/assets/me.JPG"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative transition bg-blue-600 dark:bg-yellow-500 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                            <div className="absolute inset-0 hidden overflow-hidden  lg:block"
                                 aria-hidden="true">
                            </div>
                            <div
                                className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                                <h2 className="text-3xl transition font-bold tracking-tight text-white dark:text-slate-900"
                                    id="join-heading">
                                    {t('about.motto')}
                                </h2>
                                <p className="text-lg transition text-white dark:text-slate-900">
                                    {t('about.philosophy')}
                                </p>
                                <Link
                                    href="/#"
                                    className="block w-full transition rounded-md border border-transparent bg-white dark:bg-blue-600 dark:text-white py-3 px-5 text-center text-base font-medium text-blue-700  hover:bg-gray-50 sm:inline-block sm:w-auto"
                                >
                                    {t('navbar.contact')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
