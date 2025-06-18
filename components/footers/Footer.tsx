import {QComponent} from "../icons/QComponent";
import {LinkedinGithubComponent} from "../contact/LinkedinGithubComponent";
import {useTranslation} from 'next-i18next';

export default function Footer() {
    const {t} = useTranslation('common');

    const navigation = {
        sections: [
            {name: t('about.title'), href: '#aboutme'},
            {name: t('about.skillsTitle'), href: '#skills'},
            {name: t('experience.title'), href: '#experiences'},
            {name: t('experience.education'), href: '#education'},
            {name: 'Stack', href: '#stack'},
        ],        services: [
            {name: t('services.items.consulting.title'), href: '/services/consulting'},
            {name: t('services.items.development.title'), href: '/services/development'},
            {name: t('services.items.analytics.title'), href: '/services/analytics'},
        ],
        legal: [
            {name: t('footer.privacy'), href: '/legal/privacy'},
            {name: t('footer.legal'), href: '/legal'},
        ],
    }

    return (
        <footer className="bg-white dark:bg-slate-900 transition" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto w-full h-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className={'grayscale opacity-90'}>
                            <QComponent/>
                        </div>                        <p className="text-base text-gray-500 dark:text-slate-400 transition">
                            {t('about.motto')}
                        </p>
                        <div className={'max-w-fit'}>
                            <LinkedinGithubComponent/>
                        </div>

                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900 dark:text-slate-300 transition">{t('navbar.sections')}</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.sections.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href}
                                               className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 transition">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900 dark:text-slate-300 transition">{t('navbar.services')}</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.services.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href}
                                               className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 transition">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            {/*<div>*/}
                            {/*    <h3 className="text-base font-medium text-gray-900 dark:text-slate-300 transition">Latest Projects</h3>*/}
                            {/*    <ul role="list" className="mt-4 space-y-4">*/}
                            {/*        {navigation.projects.map((item, index) => (*/}
                            {/*            <li key={index}>*/}
                            {/*                <a href={item.href}*/}
                            {/*                   className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 transition">*/}
                            {/*                    {item.name}*/}
                            {/*                </a>*/}
                            {/*            </li>*/}
                            {/*        ))}*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900 dark:text-slate-300 transition">{t('footer.legal')}</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href}
                                               className="text-base text-gray-500 hover:text-gray-900 dark:text-slate-400 transition">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 dark:border-slate-700 transition pt-8">
                    <p className="text-base text-gray-400 dark:text-slate-400 transition xl:text-center">
                        {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    )
}
