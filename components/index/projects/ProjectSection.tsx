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
        <div className="relative mx-auto py-16 lg:py-24 px-6 lg:max-w-7xl lg:px-8" id='projects'>
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3"/>
            </div>
            <div className="relative mx-auto max-w-3xl lg:max-w-7xl">
                <div className="text-left lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Some of My latest
                        Projects</h2>
                    <p className="mx-auto mt-3 lg:max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Growing with every project
                    </p>
                </div>
                <div className="mx-auto mt-12 grid  gap-5 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                    {projects?.map((project, index) => (
                        <div key={project.id} className="flex flex-col overflow-hidden rounded-lg border hover:scale-101 transition">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={'https://picsum.photos/200/300'} alt=""/>
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <Link href={`/projects/${encodeURIComponent(project.id)}`} className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{project.slug}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'flex w-full justify-center mt-12'}>
                    {hide ? null :   <button
                        type='button'
                        onClick={loadMore}
                        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white  hover:bg-blue-700"
                    >
                        Load more
                        <ArrowSmallDownIcon className='h-5 w-5 ml-3'/>
                    </button>
                    }

                </div>

            </div>
        </div>
    )
}
