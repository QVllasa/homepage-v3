import {Popover, Switch} from '@headlessui/react'
import {
    AcademicCapIcon,
    Bars3Icon,
    CodeBracketIcon,
    DocumentArrowDownIcon,
    MoonIcon,
    PresentationChartLineIcon,
    SunIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import {ContactDialog} from "../dialogs/ContactDialog";
import {PropsWithChildren, useRef, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Dropdown from "../menu/Dropdown";


const navigation = [
    {name: 'Projects', href: '/#projects', current: false},
    {name: 'Experience', href: '/#experience', current: false},
    {
        name: 'Services',
        href: '',
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

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const ref = useRef<ContactDialogProps>(null);
    const router = useRouter()
    const [enabled, setEnabled] = useState(false)

    return (
        <div className={'dark lg:sticky lg:top-0 lg:z-40 lg:overflow-y-visible'}>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <Popover
                as="nav"
                className={({open}) =>
                    classNames(
                        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                        'shadow-sm  bg-white dark:bg-slate-800'
                    )
                }
            >
                {({open}) => (
                    <>

                        {/*Desktop*/}
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                            <div className="relative flex justify-between md:gap-8 md:grid md:grid-cols-12">
                                <div className="flex md:inset-y-0 md:left-0 md:static md:col-span-2">
                                    <div className="flex flex-shrink-0 items-center">
                                        <div className="flex justify-start lg:w-0 lg:flex-1">
                                            <Link href={'/'}
                                                  className={'font-bold text-blue-600 text-6xl cursor-pointer'}>
                                                Q
                                                <span className='text-yellow-400'>.</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex md:px-8 lg:px-0 md:col-span-8 md:justify-center">
                                    <div
                                        className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
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
                                                            className={classNames(
                                                                item.current ? 'bg-gray-900 dark:bg-slate-100 dark:text-black text-white' : 'text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-slate-100 dark:hover:text-black',
                                                                'px-3 py-2 rounded-md text-base font-medium'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center md:absolute md:inset-y-0 md:right-0 md:hidden">
                                    {/* Mobile menu button */}
                                    <Popover.Button
                                        className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Popover.Button>
                                </div>
                                <div className="hidden md:flex md:items-center md:justify-end md:col-span-2">
                                    <div className='flex items-center'>
                                        <div className={'flex items-center gap-1 mr-5'}>
                                            <Switch
                                                checked={enabled}
                                                onChange={setEnabled}
                                                className={`${
                                                    enabled ? 'bg-blue-600' : 'bg-gray-300'
                                                } relative inline-flex h-4 w-8 items-center rounded-full`}
                                            >
                                                <span
                                                    className={`${
                                                        enabled ? 'translate-x-4' : 'translate-x-0'
                                                    } inline-block h-5 w-5 transform rounded-full bg-white transition border`}
                                                />
                                            </Switch>
                                            {enabled ? <MoonIcon className={'w-5 h-5 text-3xl text-gray-400 '}/> :
                                                <SunIcon className={' w-5 h-5 text-3xl text-gray-400'}/>}

                                        </div>
                                        <FaLinkedin
                                            className={'w-5 h-5 text-3xl text-gray-400 hover:text-black cursor-pointer'}
                                            onClick={() => router.push('https://www.linkedin.com/in/qendrim-vllasa/')}/>
                                        <FaGithub
                                            className={'w-5 h-5 ml-3 text-3xl text-gray-400 hover:text-black cursor-pointer'}
                                            onClick={() => router.push('https://github.com/QVllasa')}/>
                                        <button
                                            onClick={() => ref?.current?.open()}
                                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                        >
                                            Contact
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/*Mobile*/}
                        <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                            <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                                            'block rounded-md py-2 px-3 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <a
                                    href="pages#"
                                    className="flex w-full items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                >
                                    Contact
                                </a>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
            <ContactDialog ref={ref}/>
        </div>
    )
}




