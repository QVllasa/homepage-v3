import { useRouter } from 'next/router';
import { useEffect } from 'react';

// Google Analytics tracking ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Page view tracking
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// Event tracking
export const event = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Custom hook for Google Analytics
export const useGoogleAnalytics = () => {
    const router = useRouter();

    useEffect(() => {
        if (!GA_TRACKING_ID) return;

        const handleRouteChange = (url: string) => {
            pageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
};

// Performance monitoring
export const trackPerformance = () => {
    if (typeof window === 'undefined') return;

    // Core Web Vitals tracking
    const observer = new PerformanceObserver((list) => {        for (const entry of list.getEntries()) {
            const entryName = entry.name;
            const value = (entry as any).value || ((entry as any).processingStart ? (entry as any).processingStart - entry.startTime : entry.duration);
            
            event('web_vital', 'performance', entryName, Math.round(value));
            
            // Log to console in development
            if (process.env.NODE_ENV === 'development') {
                console.log(`${entryName}: ${Math.round(value)}ms`);
            }
        }
    });

    // Observe different types of performance entries
    try {
        observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
    } catch (e) {
        // Some browsers don't support all entry types
        console.warn('Performance observer not fully supported');
    }

    // Track page load time
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        event('page_load_time', 'performance', 'full_load', loadTime);
    });
};

// Error tracking
export const trackError = (error: Error, errorInfo?: any) => {
    event('exception', 'error', error.message);
    
    // In production, you might want to send this to an error tracking service
    if (process.env.NODE_ENV === 'production') {
        console.error('Tracked error:', error, errorInfo);
    }
};

// User interaction tracking
export const trackInteraction = (action: string, element: string, label?: string) => {
    event(action, 'user_interaction', `${element}${label ? `_${label}` : ''}`);
};

// Scroll depth tracking
export const trackScrollDepth = () => {
    if (typeof window === 'undefined') return;

    let maxScroll = 0;
    const milestones = [25, 50, 75, 90, 100];
    const trackedMilestones = new Set();

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // Check if we've hit any milestones
            milestones.forEach(milestone => {
                if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
                    trackedMilestones.add(milestone);
                    event('scroll_depth', 'engagement', `${milestone}%`);
                }
            });
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};

// Form tracking
export const trackFormInteraction = (formName: string, action: 'start' | 'submit' | 'error', field?: string) => {
    const label = field ? `${formName}_${field}` : formName;
    event(`form_${action}`, 'form_interaction', label);
};

// Download tracking
export const trackDownload = (fileName: string, fileType: string) => {
    event('download', 'file_interaction', `${fileType}_${fileName}`);
};

// External link tracking
export const trackExternalLink = (url: string, linkText?: string) => {
    event('click', 'external_link', linkText || url);
};
