import {Typewriter} from "react-simple-typewriter";
import {useState} from "react";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {useFirebaseApp} from "reactfire";


export default function HeaderSection() {
    const [email, setEmail] = useState('')
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const app = useFirebaseApp();
    const firestore = getFirestore(app);

    const handler = (val: string) => {
        setEmail(val)
    }

    const submit = () => {
        setIsLoading(true);
        addDoc(collection(firestore, "contact_me"), {
            email: email,
        }).then(() => {
            setIsLoading(false);
            setEmailSubmitted(true);
        });
    }

    return (
        <div className="relative bg-white h-screen">
            <div
                className="relative grid md:grid-cols-2 mx-auto w-full h-full max-w-screen-2xl  lg:text-left md:place-items-center px-4">
                <div className='md:hidden flex items-center justify-center'>
                    <img className=" h-64 w-64 rounded-full object-cover bg-yellow-300 object-top"
                         src="/assets/qendrim.png"
                         alt=""/>
                </div>
                <div>
                    <div
                        className="text-4xl text-center sm:text-center md:text-start tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <p className="block font-medium text-blue-600 xl:inline">Hi, I am</p>{' '}
                        <br/>
                        <p
                            className="block font-bold xl:inline underline decoration-yellow-400 decoration-4 underline-offset-3">Qendrim
                            Vllasa</p>
                    </div>
                    <div
                        className="mt-12 flex justify-center md:justify-start text-xl text-gray-500 sm:text-xl md:max-w-3xl">
                        <Typewriter
                            words={['Drone Lover 🚁', 'Technology Enthusiast 🚀', 'Software Engineer by ❤️']}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={600}
                        />
                    </div>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div>
                            {
                                emailSubmitted ?
                                    <div className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                                        <div className="sm:mt-0">
                                            <button
                                                type="button"
                                                className="cursor-default block w-full rounded-md border border-transparent bg-amber-300 px-5 py-3 text-base font-medium text-white shadow  sm:px-10">
                                                <span className='text-2xl mr-3'>🎉</span>
                                                I will reach out to you!
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    <div className="mt-12 sm:mx-auto sm:flex">
                                        <div className="flex-1 min-w-72 sm:w-72">
                                            <label htmlFor="cta-email" className="sr-only">
                                                Email address
                                            </label>
                                            <input
                                                id="cta-email"
                                                type="email"
                                                className="block w-full rounded-md border-none ring-2 ring-blue-500 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500"
                                                placeholder="Enter your email"
                                                onChange={(e) => handler(e.target.value)}
                                                value={email}
                                            />
                                        </div>
                                        <div className="mt-4 sm:mt-0 sm:ml-3 min-w-72">
                                            <button
                                                disabled={isLoading}
                                                type="button"
                                                onClick={submit}
                                                className="block w-full rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
                                            >
                                                Yes, contact me!
                                            </button>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='hidden md:block md:relative w-full h-full'>
                    <div
                        className="absolute bottom-0 left-0 right-0 w-full h-full md:overflow-hidden flex justify-center items-center ">
                        <img src="/assets/yellow_background.svg" alt="" className='absolute w-48 md:w-full h-auto'/>
                        <img src="/assets/qendrim.png" alt=""
                             className='h-auto md:w-144 w-96 mx-auto transform -scale-x-100 object-cover object-center'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
