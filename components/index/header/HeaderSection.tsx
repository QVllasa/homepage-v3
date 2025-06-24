import {useState} from "react";
import Image from "next/image";
import {useTranslation} from 'next-i18next';

export default function HeaderSection() {
    const {t} = useTranslation();
    
    return (
        <div className="relative bg-white dark:bg-slate-900 min-h-screen transition">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative grid md:grid-cols-2 w-full min-h-screen lg:text-left md:place-items-center py-8">
                <div className='md:hidden flex items-center justify-center my-6'>
                    <Image width={600} height={600}
                           className="h-[22rem] w-64 rounded-full bg-yellow-300 object-top object-cover"
                           src="/assets/qendrim.png"
                           alt="Qendrim Vllasa"/>
                </div>
                  <div className="space-y-6">
                    {/* Greeting */}
                    <div className="text-4xl text-center sm:text-center md:text-start tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <p className="block font-medium text-blue-600 dark:text-yellow-500 xl:inline transition">{t('header.greeting')}</p>{' '}
                        <br/>
                        <p className="block font-bold xl:inline dark:text-slate-100 transition">Qendrim</p>
                    </div>                    {/* Humorous description */}
                    <div className="mt-6 text-center md:text-left max-w-xl">
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t('header.description')}
                        </p>
                        
                        {/* Magic Trick - moved to center */}
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 mb-4">
                            🎯 <strong>{t('header.secretRecipe')}</strong> {t('header.magicalSolutions')}
                        </p>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            <span className="font-semibold">{t('header.funFact')}</span> {t('header.debuggingPassion')}
                        </p>
                    </div>                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
                        <a 
                            href="#projects" 
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                            <span className="mr-2">🎯</span>
                            {t('header.exploreProjects')}
                        </a>
                        <a 
                            href="#skills" 
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-900 dark:text-white text-sm font-medium rounded-lg transition-colors"
                        >
                            <span className="mr-2">⚡</span>
                            {t('header.exploreSkills')}
                        </a>
                    </div>
                </div>                {/* Image Section */}
                <div className='hidden md:block md:relative w-full h-full'>
                    <div className="absolute bottom-0 left-0 right-0 w-full h-full md:overflow-hidden flex justify-center items-center">
                        <Image width={600} height={600} src="/assets/yellow_background.svg" alt=""
                               className='absolute w-48 md:w-full h-auto'/>
                        <Image width={600} height={600} src="/assets/qendrim.png" alt="Qendrim Vllasa"
                               className='h-auto md:w-112 w-96 mx-auto transform object-cover object-center'/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
