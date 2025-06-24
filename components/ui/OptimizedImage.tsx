import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    sizes?: string;
    fill?: boolean;
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    objectPosition?: string;
    loading?: 'lazy' | 'eager';
    onLoad?: () => void;
    onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 85,
    placeholder = 'empty',
    blurDataURL,
    sizes,
    fill = false,
    objectFit = 'cover',
    objectPosition = 'center',
    loading = 'lazy',
    onLoad,
    onError
}) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    // Default sizes for responsive images
    const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

    // Generate blur placeholder for better UX
    const generateBlurDataURL = (w: number, h: number) => {
        return `data:image/svg+xml;base64,${Buffer.from(
            `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#f3f4f6"/>
                <rect x="20%" y="20%" width="60%" height="60%" fill="#e5e7eb" rx="4"/>
            </svg>`
        ).toString('base64')}`;
    };

    const handleLoad = () => {
        setImageLoading(false);
        if (onLoad) onLoad();
    };

    const handleError = () => {
        setImageError(true);
        setImageLoading(false);
        if (onError) onError();
    };

    // Fallback image component
    if (imageError) {
        return (
            <div 
                className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${className}`}
                style={{ width, height }}
            >
                <svg 
                    className="w-8 h-8 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                </svg>
            </div>
        );
    }

    const imageProps = {
        src,
        alt,
        className: `${className} ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
        quality,
        priority,
        loading: priority ? 'eager' as const : loading,
        onLoad: handleLoad,
        onError: handleError,
        ...(placeholder === 'blur' && {
            placeholder: 'blur' as const,
            blurDataURL: blurDataURL || (width && height ? generateBlurDataURL(width, height) : undefined)
        }),
        ...(fill ? {
            fill: true,
            sizes: defaultSizes,
            style: { objectFit, objectPosition }
        } : {
            width,
            height,
            ...(sizes && { sizes })
        })
    };

    return (
        <div className="relative">
            <Image {...imageProps} />
            {imageLoading && (
                <div 
                    className={`absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
                >
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;

// Helper function to generate responsive image sizes
export const generateImageSizes = (breakpoints: { [key: string]: string }) => {
    return Object.entries(breakpoints)
        .map(([breakpoint, size]) => `(max-width: ${breakpoint}) ${size}`)
        .join(', ');
};

// Common responsive sizes presets
export const imageSizePresets = {
    hero: '100vw',
    card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    avatar: '(max-width: 768px) 80px, 120px',
    thumbnail: '(max-width: 768px) 150px, 200px',
    full: '100vw'
};
