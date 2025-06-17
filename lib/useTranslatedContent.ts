import {useRouter} from 'next/router';

/**
 * A helper function to get the translated content based on the current locale
 * @param content Content object with translations or a simple string
 * @returns The translated content string based on the current locale, or the original content if it's not translatable
 */
export const useTranslatedContent = (content: any): string => {
    const router = useRouter();
    const locale = router.locale || 'en';

    if (!content) {
        return '';
    }

    if (typeof content === 'string') {
        return content;
    }

    // Check if content is a translatable object with language keys
    if (content && typeof content === 'object') {
        // First try to get the current locale version
        if (locale in content) {
            return content[locale];
        }
        // Fallback to English if current locale is not available
        if ('en' in content) {
            return content.en;
        }
        // If neither works, try to stringify the object (for debugging)
        try {
            return JSON.stringify(content);
        } catch (e) {
            return '[Object]';
        }
    }

    // Default fallback
    return String(content);
};
