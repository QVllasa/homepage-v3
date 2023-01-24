import {Menu, Transition} from '@headlessui/react';
import {Fragment} from 'react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import Link from "next/link";
import {useFirebaseApp} from "reactfire";
import {getDownloadURL, getStorage, ref} from "@firebase/storage";

export default function Dropdown(props: any) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {({open}) =>
                <>
                    <div>
                        <Menu.Button
                            className={` flex items-center px-3 py-2 rounded-md text-base font-medium   ${
                                open ? 'bg-black text-white dark:text-black dark:bg-slate-100' : 'text-black dark:text-white dark:hover:bg-slate-100 dark:hover:text-black hover:bg-black hover:text-white'
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
                                {props.listItems.map((listItem: any, index: any) => {
                                        if (listItem.storage) {
                                            return <DownloadItem key={index} listItem={listItem}/>
                                        } else {
                                            return listItem.link ? <LinkItem key={index} listItem={listItem}/> :
                                                <ButtonItem key={index} listItem={listItem}/>
                                        }
                                    }
                                )}
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            }
        </Menu>
    )
}


const LinkItem = (props: any) => {
    const {listItem} = props;
    return (
        <Menu.Item>
            {({close}) => (
                <Link onClick={close} href={listItem.link}
                      className={'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-blue-600 hover:text-white'}>
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
    )
}


const ButtonItem = (props: any) => {
    const {listItem} = props;
    return (
        <Menu.Item>
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
        </Menu.Item>
    )
}

const DownloadItem = (props: any) => {
    const {listItem} = props;
    const app = useFirebaseApp();
    const storage = getStorage();
    const pathReference = ref(storage, listItem.link);

    const download = async () => getDownloadURL(pathReference).then((url: string) => {
        // Download the file
        const xhr = new XMLHttpRequest();

        xhr.responseType = 'blob';
        xhr.onload = (event: ProgressEvent<XMLHttpRequestEventTarget>) => {
            const blob = xhr.response;
            // save the blob or do whatever you want with it
        };
        xhr.open('GET', url);
        xhr.send();

    }).catch((error: any) => {
        // Handle any errors
        switch (error.code) {
            case 'storage/object-not-found':
                console.log("File doesn't exist")
                // File doesn't exist
                break;
            case 'storage/unauthorized':
                console.log("User doesn't have permission to access the object")
                // User doesn't have permission to access the object
                break;
            case 'storage/canceled':
                console.log("User canceled the upload")
                // User canceled the upload
                break;
            case 'storage/unknown':
                console.log("Unknown error occurred, inspect the server response")
                // Unknown error occurred, inspect the server response
                break;
        }
    });

    return (
        <Menu.Item>
            <button
                onClick={download}
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
        </Menu.Item>
    )
}





