import {CheckCircleIcon,} from '@heroicons/react/24/outline'
import {useRouter} from "next/router";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {useFirebaseApp} from "reactfire";
import useSWR from "swr";
import {ServiceModel} from "../../../components/models/service.model";
import Image from "next/image";


export default function Index() {
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const router = useRouter();
    const {key} = router.query;

    const q = (key: string) => query(collection(firestore, "services"), where("key", "==", key));

    const loadService = (key: string) => getDocs(q(key)).then((querySnapshot) => {
        return querySnapshot.docs[0].data() as ServiceModel
    })

    const {data, error} = useSWR(key, loadService)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
            <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                <TopDots/>
                <div className="relative">
                    <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        {data.title ?? 'No Title'}
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
                        {data.description}
                    </p>
                </div>
                {data.sections.map((section, index) => {return index % 2 === 1 ? <Right section={section} /> : <Left section={section} />})}
            </div>
        </div>
    )
}

const Left = (props: {section: {
        description: string,
        img: string,
        keys: { title: string, description: string }[],
        title: string,
    }})=>{
    const {section} = props;
    return (<>
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{section.title}</h3>
                <p className="mt-3 text-lg text-gray-500">
                    {section.description}
                </p>
                <dl className="mt-10 space-y-10">
                    {section.keys.map((item, index) => (
                        <div key={index} className="relative">
                            <dt>
                                <div
                                    className="absolute flex h-8 w-8 items-start justify-start rounded-xl text-blue-600">
                                    <CheckCircleIcon className="h-8 w-8" aria-hidden="true"/>
                                </div>
                                <p className="ml-12 text-lg font-medium leading-6 text-gray-900">{item.title}</p>
                            </dt>
                            <dd className="mt-2 ml-12 text-base text-gray-500">{item.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                <Image
                    className="relative mx-auto"
                    width={490}
                    height={400}
                    src={section.img}
                    alt=""
                />
            </div>
        </div>
        <LeftDots/>
    </>)
}

const Right = (props: {section: {
        description: string,
        img: string,
        keys: { title: string, description: string }[],
        title: string,
    }}) => {
    const {section} = props;
    return (
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="lg:col-start-2">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{section.title}</h3>
                    <p className="mt-3 text-lg text-gray-500">
                        {section.description}
                    </p>
                    <dl className="mt-10 space-y-10">
                        {section.keys.map((item, index) => (
                            <div key={index} className="relative">
                                <dt>
                                    <div
                                        className="absolute flex h-8 w-8 items-start justify-start rounded-xl text-blue-600">
                                        <CheckCircleIcon className="h-8 w-8" aria-hidden="true"/>
                                    </div>
                                    <p className="ml-12 text-lg font-medium leading-6 text-gray-900">{item.title}</p>
                                </dt>
                                <dd className="mt-2 ml-12 text-base text-gray-500">{item.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                    <RightDots/>
                    <Image
                        className="relative mx-auto"
                        width={490}
                        height={400}
                        src={section.img}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

const LeftDots = ()=>{
    return (
        <svg
            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
        </svg>
    )
}

const RightDots = ()=>{
    return (
        <svg
            className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
            width={784}
            height={404}
            fill="none"
            viewBox="0 0 784 404"
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                </pattern>
            </defs>
            <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"/>
        </svg>
    )
}

const TopDots = ()=>{
    return (
        <svg
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true">
            <defs>
                <pattern
                    id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"/>
        </svg>
    )
}