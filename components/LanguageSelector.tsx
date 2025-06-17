import {useRouter} from 'next/router';

const LanguageSelector = () => {
    const router = useRouter();
    const {pathname, asPath, query} = router;

    const switchLanguage = (locale: string) => {
        router.push({pathname, query}, asPath, {locale});
    };

    return (
        <div className="flex items-center gap-3 mr-5">
            {/* English button */}
            <button
                onClick={() => switchLanguage('en')}
                className={`px-2 py-0.5 rounded text-xs font-bold ${
                    router.locale === 'en'
                        ? 'bg-blue-600 text-white dark:bg-yellow-500 dark:text-slate-900'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
                aria-label="Switch to English"
            >
                EN
            </button>

            {/* German button */}
            <button
                onClick={() => switchLanguage('de')}
                className={`px-2 py-0.5 rounded text-xs font-bold ${
                    router.locale === 'de'
                        ? 'bg-blue-600 text-white dark:bg-yellow-500 dark:text-slate-900'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
                aria-label="Switch to German"
            >
                DE
            </button>
        </div>
    );
};

export default LanguageSelector;
