import {ProjectModel} from "../../models/project.model";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useFirebaseApp} from "reactfire";
import {
    collection,
    DocumentData,
    getDocs,
    getFirestore,
    limit,
    orderBy,
    Query,
    query,
    QueryDocumentSnapshot,
    startAfter
} from "firebase/firestore";
import {ArrowSmallDownIcon} from "@heroicons/react/24/outline";
import Image from "next/image";


export default function ProjectSection() {
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const [hide, setHide] = useState(false);
    const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData>>();

    let q = query(collection(firestore, "projects"), orderBy('rollout', 'desc'), limit(6))
    const loadProjects = (query: Query<DocumentData>) => {
        return getDocs(query)
            .then((data) => {
                if(data.empty) setHide(true);
                setLastVisible(data.docs[data.docs.length - 1]);
                let list: any =[];
                data.forEach((doc) => {
                    const project = {
                        ...doc.data() as ProjectModel,
                        id: doc.id
                    };
                    list.push(project);
                })
                setProjects([...projects, ...list]);
            });
    }

    const loadMore = async () => {
        q = query(collection(firestore, "projects"),
            orderBy("rollout", "desc"),
            startAfter(lastVisible),
            limit(3));
        loadProjects(q);
    }

    useEffect(() => {
        loadProjects(q);
    }, [])



    return (
        <div className={'dark:bg-slate-900'}>
            <div className="relative mx-auto py-16 lg:py-24 px-6 lg:max-w-7xl lg:px-8" id='projects'>
                <div className="absolute inset-0 ">
                    <div className="h-1/3  sm:h-2/3"/>
                </div>
                <div className="relative mx-auto max-w-3xl lg:max-w-7xl">
                    <div className="text-left lg:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">Some
                            of My latest
                            Projects</h2>
                        <p className="mx-auto mt-3 lg:max-w-2xl text-xl text-gray-500 sm:mt-4 dark:text-slate-300">
                            Growing with every project
                        </p>
                    </div>
                    <div className="mx-auto mt-12 grid  gap-5 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                        {projects?.map((project) => (
                            <div key={project.id}
                                 className="flex flex-col overflow-hidden rounded-lg border dark:border-slate-700 hover:scale-101 transition">
                                <div className="flex-shrink-0 bg-white">
                                    <Image className="h-48 w-full" width={640} height={400} src={project.img} alt=""/>
                                </div>
                                <div className="flex flex-1 flex-col justify-between bg-white dark:bg-slate-800 p-6">
                                    <div className="flex-1">
                                        <Link href={`projects/${encodeURIComponent(project.id)}`}
                                              className="mt-2 block">
                                            <p className="text-xl font-semibold text-gray-900 dark:text-slate-100">{project.title}</p>
                                            <p className="mt-3 text-base text-gray-500 dark:text-slate-300">{project.slug}</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={'flex w-full justify-center mt-12'}>
                        {hide ? null : <button
                            type='button'
                            onClick={loadMore}
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 dark:bg-yellow-500 dark:text-slate-900 px-4 py-2 text-base font-medium text-white  hover:bg-blue-700"
                        >
                            Load more
                            <ArrowSmallDownIcon className='h-5 w-5 ml-3'/>
                        </button>
                        }

                    </div>

                </div>
            </div>
        </div>

    )
}
