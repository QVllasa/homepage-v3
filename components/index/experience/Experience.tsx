import ExperienceAccordion from "../../accordion/ExperienceAccordion";
import {ArrowSmallDownIcon, ArrowSmallUpIcon, CheckBadgeIcon} from "@heroicons/react/24/outline";
import {useFirebaseApp} from "reactfire";
import {collection, DocumentData, getDocs, getFirestore, orderBy, Query, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {ExperienceModel} from "../../models/experience.model";

export default function Experience(){
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const [exp, setExp] = useState<ExperienceModel[]>([]);
    const [counter, setCounter] = useState(4);

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
                <div className="relative mx-auto max-w-md  px-4 sm:max-w-3xl lg:max-w-7xl sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience.</h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Where I applied and gained my skills
                        </p>
                    </div>
                    <dl className="grid grid-cols-1 gap-4 lg:col-span-2">
                        {exp.map((item, index) => {
                            if (index<counter) return <ExperienceAccordion key={index} item={item} />
                        }
                        )}
                        <div className='flex justify-center items-end '>
                            <button
                                onClick={()=>exp.length != counter ? setCounter(exp.length) : setCounter(4)}
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none "
                            >
                                {exp.length != counter ? 'Show more' : 'Show less'}
                                {exp.length != counter ? <ArrowSmallDownIcon className='h-5 w-5 ml-3'/> : <ArrowSmallUpIcon className='h-5 w-5 ml-3'/>}

                            </button>
                        </div>
                    </dl>

                </div>

            </div>
        </div>
    )
}
