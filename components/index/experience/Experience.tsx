import ExperienceAccordion from "../../accordion/ExperienceAccordion";
import {ArrowSmallRightIcon, CheckBadgeIcon} from "@heroicons/react/24/outline";
import {useFirebaseApp} from "reactfire";
import {collection, DocumentData, getDocs, getFirestore, orderBy, Query, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {ExperienceModel} from "../../models/experience.model";

export default function Experience(){
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const [exp, setExp] = useState<ExperienceModel[]>([]);

    const q = query(collection(firestore, "experience"), orderBy('order', 'desc'));

    const loadExperiences = (query: Query<DocumentData>)=>{
        return getDocs(query)
            .then((data) => {
                let list: any =[];
                data.forEach((doc) => {
                    const exp = {
                        ...doc.data(),
                        icon: CheckBadgeIcon,
                        id: doc.id
                    };
                    list.push(exp);
                })
                console.log(list);
                setExp([...exp, ...list]);
            });
    }

    useEffect(()=>{loadExperiences(q)}, [])

    if (exp.length == 0){
        return <div>Loading...</div>
    }


    return (
        <div className=" bg-white">
            <div className="relative mx-auto py-24 ">
                <div className="relative mx-auto max-w-md space-y-6 px-4 sm:max-w-3xl lg:max-w-7xl sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience.</h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Where I applied and gained my skills
                        </p>
                    </div>
                    <dl className="mt-20 grid grid-cols-1 gap-4 lg:col-span-2 lg:mt-0">
                        {exp.map((item, index) => {
                            if (index<4) return <ExperienceAccordion key={index} item={item} />
                        }
                        )}
                        <div className='flex justify-end items-end mt-8'>
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Show more
                                <ArrowSmallRightIcon className='h-5 w-5 ml-3'/>
                            </button>
                        </div>
                    </dl>

                </div>

            </div>
        </div>
    )
}
