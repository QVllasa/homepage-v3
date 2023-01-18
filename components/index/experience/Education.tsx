import EducationAccordion from "../../accordion/EducationAccordion";
import {useFirebaseApp} from "reactfire";
import {collection, DocumentData, getDocs, getFirestore, orderBy, Query, query} from "firebase/firestore";
import {useEffect, useState} from "react";
import {CheckBadgeIcon} from "@heroicons/react/24/outline";
import {EducationModel} from "../../models/education.model";

export default function Education() {
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const [educations, setEducations] = useState<EducationModel[]>([]);

    const q = query(collection(firestore, "education"), orderBy('order', 'desc'));

    const loadEducations = (query: Query<DocumentData>) => {
        return getDocs(query)
            .then((data) => {
                let list: any = [];
                data.forEach((doc) => {
                    const education = {
                        ...doc.data(),
                        icon: CheckBadgeIcon,
                        id: doc.id
                    };
                    list.push(education);
                })
                setEducations([...educations, ...list]);
            });
    }

    useEffect(() => {
        loadEducations(q)
    }, [])

    if (educations.length == 0) {
        return <div>Loading...</div>
    }


    return (
        <div className=" bg-white">
            <div className="relative mx-auto py-24">
                <div className="relative mx-auto max-w-md space-y-6 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education.</h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Where I shifted my limits
                        </p>
                    </div>
                    <dl className="mt-20 grid grid-cols-1 gap-4 lg:col-span-2 lg:mt-0">
                        {educations.map((item) => (
                            <EducationAccordion key={item.id} item={item}/>
                        ))}
                    </dl>

                </div>

            </div>
        </div>
    )
}
