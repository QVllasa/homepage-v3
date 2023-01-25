import Link from "next/link";

export const QComponent = () => {
    return (<div className="flex flex-shrink-0 items-center">
        <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={'/'}
                  className={'font-bold transition text-blue-600 dark:text-yellow-500 text-6xl cursor-pointer'}>
                q
                <span className='text-yellow-400 transition dark:text-blue-600'>.</span>

            </Link>
        </div>
    </div>)
}
