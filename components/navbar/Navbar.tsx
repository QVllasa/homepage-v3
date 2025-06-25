import {AcademicCapIcon, Bars3Icon, ChevronRightIcon, CodeBracketIcon, PresentationChartLineIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import {DarkModeSwitch} from "../DarkModeSwitch";
import {LinkedinGithubComponent} from "../contact/LinkedinGithubComponent";
import {QComponent} from "../icons/QComponent";
import LanguageSelector from "../LanguageSelector";
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';

// Import Shadcn UI components
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle} from "../ui/navigation-menu";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "../ui/dropdown-menu";
import {Button} from "../ui/button";
import {cn} from "../../lib/utils";


export default function Navbar() {
    const {t} = useTranslation();
    const router = useRouter();

    // CV file path based on selected language
    const cvFilePath = router.locale === 'de'
        ? '/cv/Qendrim_Vllasa_CV_DE_2025.pdf'
        : '/cv/Qendrim_Vllasa_CV_EN_2025.pdf';

    const navigation = [
        {name: t('navbar.projects'), href: '/#projects', current: false},
        {name: t('navbar.experience'), href: '/#experience', current: false},
        {
            name: t('navbar.services'),
            href: '/#services',
            current: false,
            popover: true,
            children: [
                {
                    name: t('services.items.consulting.title'),
                    icon: AcademicCapIcon,
                    link: "/skills/consulting",
                    storage: false
                },
                {
                    name: t('services.items.development.title'),
                    icon: CodeBracketIcon,
                    link: "/skills/development",
                    storage: false,
                },
                {
                    name: t('services.items.analytics.title'),
                    icon: PresentationChartLineIcon,
                    link: "/skills/analytics",
                    storage: false
                }
            ]
        },
        {name: t('navbar.downloadCV'), href: cvFilePath, current: false, download: true}
    ]

    // Function to scroll to contact section
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'});
        } else {
            // If we're not on the main page, navigate to the home page and scroll to contact
            window.location.href = '/#contact-section';
        }
    };

    return (
        <div className={'lg:overflow-y-visible fixed top-0 z-40 w-full'}>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <div className="shadow-sm bg-white dark:bg-slate-800">
                {/* Desktop */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="relative flex justify-between lg:gap-8 lg:grid lg:grid-cols-12">
                        <div className="flex lg:inset-y-0 lg:left-0 lg:static lg:col-span-2">
                            <div className="flex flex-shrink-0 items-center">
                                <QComponent/>
                            </div>
                        </div>

                        {/* Desktop Navigation with Shadcn UI NavigationMenu */}
                        <div className="hidden lg:flex lg:px-8 lg:px-0 lg:col-span-8 lg:justify-center">
                            <div className="flex items-center px-6 py-4 lg:mx-auto lg:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        {navigation.map((item, idx) =>
                                            item.popover ? (
                                                <NavigationMenuItem key={idx}>
                                                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                                                    <NavigationMenuContent>
                                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                            {item.children.map((child) => (
                                                                <li key={child.name}>
                                                                    <NavigationMenuLink asChild>
                                                                        <Link
                                                                            href={child.link}
                                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-slate-900"
                                                                        >
                                                                            <div className="flex items-center gap-2">
                                                                                <child.icon className="h-5 w-5"/>
                                                                                <div className="text-sm font-medium leading-none">{child.name}</div>
                                                                            </div>
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </NavigationMenuItem>
                                            ) : (
                                                <NavigationMenuItem key={idx}>
                                                    <Link
                                                        href={item.href}
                                                        download={item.download}
                                                        target={item.download ? "_blank" : undefined}
                                                        className={cn(
                                                            navigationMenuTriggerStyle(),
                                                            "hover:bg-black hover:text-white dark:hover:bg-slate-100 dark:hover:text-black"
                                                        )}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </NavigationMenuItem>
                                            )
                                        )}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>

                        {/* Mobile icons */}
                        <div className={'flex items-center gap-5 mr-5 lg:hidden'}>
                            <DarkModeSwitch/>
                            <LinkedinGithubComponent/>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center lg:absolute lg:inset-y-0 lg:right-0 lg:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="-mx-2 p-2 text-gray-400 dark:text-slate-300">
                                        <span className="sr-only">Open menu</span>
                                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="mt-2 w-60 bg-white dark:bg-slate-800">
                                    {navigation.map((item) =>
                                        item.popover ? (
                                            <DropdownMenu key={item.name}>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="w-full justify-between">
                                                        {item.name}
                                                        <ChevronRightIcon className="h-4 w-4 text-blue-600 dark:text-yellow-500"/>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    {item.children.map((child) => (
                                                        <DropdownMenuItem key={child.name} asChild>
                                                            <Link href={child.link} className="flex items-center gap-2">
                                                                <child.icon className="h-5 w-5"/>
                                                                {child.name}
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        ) : (
                                            <DropdownMenuItem key={item.name} asChild>
                                                <Link
                                                    href={item.href}
                                                    download={item.download}
                                                    target={item.download ? "_blank" : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        )
                                    )}
                                    <div className="px-3 py-2 mt-4">
                                        <LanguageSelector/>
                                    </div>
                                    <div className="px-2 pt-2 pb-2">
                                        <Button
                                            className="w-full"
                                            onClick={scrollToContact}
                                        >
                                            {t('navbar.contact')}
                                        </Button>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Desktop right section */}
                        <div className="hidden lg:flex lg:items-center lg:justify-end lg:col-span-2">
                            <div className='flex items-center space-x-4'>
                                <LanguageSelector/>
                                <DarkModeSwitch/>
                                <LinkedinGithubComponent/>
                                <Button
                                    onClick={scrollToContact}
                                >
                                    {t('navbar.contact')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
