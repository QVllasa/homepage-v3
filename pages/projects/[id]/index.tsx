import {useFirebaseApp} from "reactfire";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import useSWR from 'swr';
import {ProjectModel} from "../../../components/models/project.model";
import {CheckIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";


export default function ProjectDetails() {
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const router = useRouter()
    const {id} = router.query

    const docRef = (id: string) => doc(firestore, "projects", id);
    const loadProject = (id: string) => getDoc(docRef(id)).then((docSnap) => {
        return {
            ...docSnap.data() as ProjectModel,
            id: docSnap.id
        }
    })


    const {data, error} = useSWR(id, loadProject)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>


    return (
        <div className={'dark'}>
            <div className="relative bg-white py-16 sm:py-24 dark:bg-slate-900">
                <div
                    className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 lg:overflow-visible">
                    <div className="relative sm:py-16 lg:py-0 lg:sticky lg:top-0">
                        <div aria-hidden="true"
                             className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"/>
                            <svg
                                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4}
                                              className="text-gray-200 dark:text-slate-800"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                            </svg>
                        </div>
                        <div
                            className="relative lg:absolute lg:right-0 lg:w-[48rem] mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20 ">
                            <div className="relative overflow-hidden rounded-2xl pt-[56.25%] pb-10 ">
                                <Image width={640} height={400}
                                       className="absolute inset-0 h-full w-full "
                                       src={data.img}
                                       alt={data.title}
                                />
                            </div>
                            <Link target="_blank" href={data.previewLink ?? ''}
                                  className={'flex mx-auto w-max h-max mt-4 relative'}>
                                <button
                                    disabled={!data.previewLink}
                                    type="button"
                                    className="relative mx-auto disabled:bg-gray-300 dark:disabled:bg-slate-700 dark:disabled:text-slate-400 block dark:bg-yellow-500 dark:text-slate-900 rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
                                >
                                    Live Preview
                                </button>
                            </Link>
                            {data.previewLink ? null :
                                <p className={'w-full text-center mt-2 text-gray-400 dark:text-slate-600'}>Only visible
                                    at the customers
                                    site</p>}
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                        {/* Content area */}
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
                                {data.title}
                            </h2>
                            <div className="mt-6 space-y-6 text-gray-500 dark:text-slate-300">
                                <p className="text-lg">
                                    {data.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 space-y-10">
                            {data.keys.map((item, index) => (
                                <div key={index} className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex h-8 w-8 items-start justify-start rounded-xl text-blue-600 dark:text-yellow-500">
                                            <CheckIcon className="h-8 w-8" aria-hidden="true"/>
                                        </div>
                                        <p className="ml-12 text-lg font-medium leading-6 text-gray-900 dark:text-slate-100">{item.value}</p>
                                    </dt>
                                    <dd className="mt-2 ml-12 text-base text-gray-500 dark:text-slate-300">{item.description}</dd>
                                </div>
                            ))}
                        </div>

                        {/* Stats section */}
                        <div className="mt-10">
                            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                                {data.stats?.map((stat, index) => (
                                    <div key={index} className="border-t-2 border-gray-100 dark:border-slate-700 pt-6">
                                        <dt className="text-base font-medium text-gray-500 dark:text-slate-100">{stat.key}</dt>
                                        <dd className="text-3xl font-bold tracking-tight text-gray-900 dark:text-yellow-500">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
