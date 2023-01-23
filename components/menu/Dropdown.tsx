import {Menu, Transition} from '@headlessui/react';
import {Fragment} from 'react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import Link from "next/link";

export default function Dropdown(props: any) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {({open}) =>
                 <>
                    <div>
                        <Menu.Button
                            className={` flex items-center px-3 py-2 rounded-md text-base font-medium   ${
                                open ? 'bg-black text-white ' : 'text-black hover:bg-black hover:text-white'
                            }`}>
                            {props.buttonText}
                            <ChevronDownIcon
                                className="ml-2 -mr-1 h-5 w-5"
                                aria-hidden="true"/>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                {props.listItems.map((listItem: any, index: any) => listItem.link ?
                                        <Menu.Item key={index}>
                                            {({ close }) => (
                                                <Link onClick={close} href={listItem.link} className={'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-600 hover:text-white'}>
                                                    {listItem.icon ?
                                                        <listItem.icon
                                                            className="mr-2 h-5 w-5"
                                                            aria-hidden="true"/>
                                                        :
                                                        null}
                                                    {listItem.name}
                                                </Link>
                                            )}

                                        </Menu.Item>
                                        :
                                        <Menu.Item key={index}>
                                            <button
                                                className={'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-600 hover:text-white'}
                                            >
                                                {listItem.icon ?
                                                    <listItem.icon
                                                        className="mr-2 h-5 w-5"
                                                        aria-hidden="true"/>
                                                    :
                                                    null}
                                                {listItem.name}
                                            </button>
                                        </Menu.Item>)
                                }
                            </div>
                        </Menu.Items>
                    </Transition>
                 </>
            }
        </Menu>
    )
}










