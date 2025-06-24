import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import Link from "next/link";

export default function Dropdown(props: any) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center px-3 py-2 rounded-md text-base font-medium text-black transition dark:text-white dark:hover:bg-slate-100 dark:hover:text-black hover:bg-black hover:text-white">
                    {props.buttonText}
                    <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5"
                        aria-hidden="true"/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {props.listItems.map((listItem: any, index: any) => {
                    if (listItem.storage) {
                        return <DownloadItem key={index} listItem={listItem}/>
                    } else {
                        return listItem.link ? <LinkItem key={index} listItem={listItem}/> :
                            <ButtonItem key={index} listItem={listItem}/>
                    }
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


const LinkItem = (props: any) => {
    const {listItem} = props;
    return (
        <DropdownMenuItem asChild>
            <Link href={listItem.link}
                  className={'flex w-full items-center rounded-md px-2 py-2 text-sm'}>
                {listItem.icon ?
                    <listItem.icon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"/>
                    :
                    null}
                {listItem.name}
            </Link>
        </DropdownMenuItem>
    )
}


const ButtonItem = (props: any) => {
    const {listItem} = props;
    return (
        <DropdownMenuItem asChild>
            <button
                className={'flex w-full items-center rounded-md px-2 py-2 text-sm'}
            >
                {listItem.icon ?
                    <listItem.icon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"/>
                    :
                    null}
                {listItem.name}
            </button>
        </DropdownMenuItem>
    )
}

const DownloadItem = (props: any) => {
    const {listItem} = props;

    return (
        <DropdownMenuItem asChild>
            <Link
                download
                target={'_blank'}
                href={listItem.link}
                className={'flex w-full items-center rounded-md px-2 py-2 text-sm'}
            >
                {listItem.icon ?
                    <listItem.icon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"/>
                    :
                    null}
                {listItem.name}
            </Link>
        </DropdownMenuItem>
    )
}





