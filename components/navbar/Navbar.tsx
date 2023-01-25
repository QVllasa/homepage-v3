import {Disclosure, Popover} from '@headlessui/react'
import {
    AcademicCapIcon,
    Bars3Icon,
    ChevronDownIcon,
    ChevronRightIcon,
    CodeBracketIcon,
    DocumentArrowDownIcon,
    PresentationChartLineIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import {ContactDialog} from "../dialogs/ContactDialog";
import {PropsWithChildren, useRef, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Dropdown from "../menu/Dropdown";
import {DarkModeSwitch} from "../DarkModeSwitch";
import {LinkedinGithubComponent} from "../contact/LinkedinGithubComponent";
import {QComponent} from "../icons/QComponent";


const navigation = [
    {name: 'Projects', href: '/#projects', current: false},
    {name: 'Experience', href: '/#experience', current: false},
    {
        name: 'Services',
        href: '/#services',
        current: false,
        popover: true,
        children: [
            {
                name: 'Consulting',
                icon: AcademicCapIcon,
                link: "/services/consulting",
                storage: false
            },
            {
                name: 'App Development',
                icon: CodeBracketIcon,
                link: "/services/development",
                storage: false,
            },
            {
                name: 'Data Analytics',
                icon: PresentationChartLineIcon,
                link: "/services/analytics",
                storage: false
            }
        ]
    },
    {
        name: 'Downloads',
        href: '',
        current: false,
        popover: true,
        children: [{
            name: 'Download CV',
            icon: DocumentArrowDownIcon,
            link: '/CV/Qendrim_Vllasa_-_Software_Engineer_EN.pdf',
            storage: true
        }]
    }
]
type ContactDialogProps = PropsWithChildren<{ open: () => {} }>;

export default function Navbar() {
    const ref = useRef<ContactDialogProps>(null);
    const router = useRouter()
    const [enabled, setEnabled] = useState(false)


    return (
        <div className={'lg:overflow-y-visible fixed top-0 z-40 w-full'}>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <Popover
                as="nav"
                className={`shadow-sm  bg-white dark:bg-slate-800`
                }
            >
                {({open}) => (
                    <>

                        {/*Desktop*/}
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                            <div className="relative flex justify-between lg:gap-8 lg:grid lg:grid-cols-12">
                                <div className="flex lg:inset-y-0 lg:left-0 lg:static lg:col-span-2">
                                    <div className="flex flex-shrink-0 items-center">
                                        <QComponent/>
                                    </div>
                                </div>
                                <div className="hidden lg:flex lg:px-8 lg:px-0 lg:col-span-8 lg:justify-center">
                                    <div
                                        className="flex items-center px-6 py-4 lg:mx-auto lg:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4">
                                                {navigation.map((item, index) => (
                                                    item.popover ?
                                                        <Dropdown key={index} buttonText={item.name}
                                                                  listItems={item.children}></Dropdown>
                                                        :
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className={`${item.current ? 'bg-gray-900 transition dark:bg-slate-100 dark:text-black text-white' : 'text-black transition dark:text-white hover:bg-black hover:text-white dark:hover:bg-slate-100 dark:hover:text-black'} px-3 py-2 rounded-md text-base font-medium`}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'flex items-center gap-5 mr-5 lg:hidden'}>
                                    <DarkModeSwitch/>
                                    <LinkedinGithubComponent/>
                                </div>
                                <div className="flex items-center lg:absolute lg:inset-y-0 lg:right-0 lg:hidden">
                                    {/* Mobile menu button */}
                                    <Popover.Button
                                        className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                                        <span className="sr-only">Open menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Popover.Button>
                                </div>
                                <div className="hidden lg:flex lg:items-center lg:justify-end lg:col-span-2">
                                    <div className='flex items-center'>
                                        <DarkModeSwitch/>
                                        <LinkedinGithubComponent/>
                                        <button
                                            onClick={() => ref?.current?.open()}
                                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 dark:bg-yellow-500 dark:text-slate-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                        >
                                            Contact
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/*Mobile*/}
                        <Popover.Panel as="nav" className="lg:hidden " aria-label="Global">
                            {({close}) => (
                                <div className="mx-auto max-w-full space-y-1 px-2 pt-2 pb-3 sm:px-4">
                                    {navigation.map((item) =>
                                        item.popover ?
                                            (<div key={item.name} className="w-full px-3 py-2">
                                                    <div className="mx-auto w-full rounded-2xl bg-white">
                                                        <Disclosure>
                                                            {({open}) => (
                                                                <>
                                                                    <Disclosure.Button
                                                                        className="flex w-full justify-between">
                                                                        <Link
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            onClick={() => close()}
                                                                            className={`${item.current ? 'bg-gray-100 text-gray-900 ' : 'hover:bg-gray-50'} block rounded-md  text-base font-medium`}
                                                                        >
                                                                            {item.name}
                                                                        </Link>
                                                                        {open ? <ChevronDownIcon
                                                                            className={`h-5 w-5 text-blue-600`}
                                                                        /> : <ChevronRightIcon
                                                                            className={`h-5 w-5 text-blue-600`}
                                                                        />}

                                                                    </Disclosure.Button>
                                                                    <Disclosure.Panel
                                                                        className="pl-3 pt-4 pb-2 text-sm text-slate-700  gap-4 flex flex-col ">
                                                                        {item.children.map((child) => (
                                                                            <Link
                                                                                key={child.name}
                                                                                href={child.link}
                                                                                onClick={() => close()}
                                                                                className={'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-600 hover:text-white'}
                                                                            >
                                                                                <child.icon
                                                                                    className="mr-2 h-5 w-5"
                                                                                    aria-hidden="true"/>
                                                                                {child.name}
                                                                            </Link>
                                                                        ))}
                                                                    </Disclosure.Panel>
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => close()}
                                                    aria-current={item.current ? 'page' : undefined}
                                                    className={'block rounded-md py-2 px-3 text-base font-medium'}
                                                >
                                                    {item.name}
                                                </Link>
                                            )
                                    )}

                                    <button
                                        onClick={() => ref?.current?.open()}
                                        className="mt-24 flex w-full items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                    >
                                        Contact
                                    </button>
                                </div>
                            )}

                        </Popover.Panel>
                    </>
                )}
            </Popover>
            <ContactDialog ref={ref}/>
        </div>
    )
}




