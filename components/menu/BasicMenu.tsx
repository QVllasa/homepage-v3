import {Menu, Transition} from "@headlessui/react";
import {cx, Icon, VechaiProvider} from "@vechaiui/react";
import {Fragment} from "react";
import {HiOutlineDocumentDownload} from "react-icons/all";


export default function BasicMenu(props: any) {
    return (
        <VechaiProvider>
                <Menu as="div" className="relative inline-block">
                    <Menu.Button>
                        {props.children}
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-in-out duration-150"
                        enterFrom="transform opacity-0 scale-90"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-out duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-90"
                    >
                        <Menu.Items className={cx(
                                "absolute left-0 z-dropdown font-bold w-56 min-w-max mt-2 origin-top-left rounded-md shadow-sm outline-none",
                                "bg-white border border-gray-200",
                                "dark:bg-neutral-800 dark:border-gray-700"
                            )}>
                            <div className="px-1 py-1">
                                <div role="group">
                                    <Menu.Item>
                                        {({active, disabled}) => (
                                            <button
                                                disabled={disabled}
                                                aria-disabled={disabled}
                                                className={cx(
                                                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-pointer focus:outline-none",
                                                    active && "bg-neutral-100 dark:bg-neutral-700",
                                                    disabled &&
                                                    "disabled:opacity-60 disabled:cursor-not-allowed"
                                                )}
                                            >
                                                <Icon
                                                    as={HiOutlineDocumentDownload}
                                                    label="documentDownload"
                                                    className={cx("w-4 h-4 mr-2", active ? "" : "text-neutral-500")}
                                                />
                                                Curriculum Vitae
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
        </VechaiProvider>
    );
}
