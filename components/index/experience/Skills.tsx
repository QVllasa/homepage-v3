import {ArrowSmallRightIcon, CheckBadgeIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {collection, DocumentData, getDocs, getFirestore, orderBy, Query, query} from "firebase/firestore";
import {useFirebaseApp} from "reactfire";
import SkillsAccordion from "../../accordion/SkillsAccordion";
import {SkillModel} from "../../models/skill.model";

export default function Skills() {
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const [skills, setSkills] = useState<SkillModel[]>([]);

    const q = query(collection(firestore, "top-skills"), orderBy('order', 'asc'));

    const loadSkills = (query: Query<DocumentData>)=>{
        return getDocs(query)
            .then((data) => {
                let list: any =[];
                data.forEach((doc) => {
                    const skill = {
                        ...doc.data(),
                        icon: CheckBadgeIcon,
                        id: doc.id
                    };
                    list.push(skill);
                })
                setSkills([...skills, ...list]);
            });
    }

    useEffect(()=>{loadSkills(q)}, [])

    if (skills.length == 0){
        return <div>Loading...</div>
    }

    return (
        <div className=" bg-white">
            <div className="relative mx-auto  py-24 ">
                <div className="relative mx-auto max-w-md space-y-6 px-4 sm:max-w-3xl sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16 lg:max-w-7xl">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top
                            Skills.</h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            What I use to solve problems
                        </p>
                    </div>
                    <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
                        {skills?.map((item, index) => {
                            if (index<4){
                                return <SkillsAccordion key={item.id} item={item}/>
                            }
                        })}
                    </dl>
                </div>
                <div className='flex justify-end items-end mt-8 lg:max-w-7xl sm:max-w-3xl sm:px-6 max-w-md'>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Show more
                        <ArrowSmallRightIcon className='h-5 w-5 ml-3'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

