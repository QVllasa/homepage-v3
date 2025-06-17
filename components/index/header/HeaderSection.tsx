import {Typewriter} from "react-simple-typewriter";
import {useState} from "react";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {useFirebaseApp} from "reactfire";
import {SubmitHandler, useForm} from "react-hook-form";
import Image from "next/image";
import {useTranslation} from 'next-i18next';

type Email = {
    email: string,
};
export default function HeaderSection() {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const {t} = useTranslation('common');

    const onSubmit: SubmitHandler<Email> = (data: { email: string }) => {
        console.log("data:", data);
        if (!data.email) return
        setIsLoading(true);
        addDoc(collection(firestore, "mail"), {
            to: ['qendrim.vllasa@gmail.com'],
            message: {
                subject: `Contact Me: ${data.email}`,
                text: "Kontaktiere mich: " + data.email,
            }
        }).then(() => {
            setIsLoading(false);
            setEmailSubmitted(true);
        });
    };



    return (
        <div className="relative bg-white transition dark:bg-slate-900 h-screen transition">
            <div
                className="relative grid md:grid-cols-2 mx-auto w-full h-full max-w-screen-2xl  lg:text-left md:place-items-center px-4">
                <div className='md:hidden flex items-center justify-center my-6'>
                    <Image width={600} height={600}
                           className=" h-[22rem] w-64 rounded-full  bg-yellow-300  object-top object-cover"
                           src="/assets/qendrim.png"
                           alt=""/>
                </div>
                <div>
                    <div
                        className="text-4xl text-center sm:text-center md:text-start tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <p className="block transition font-medium text-blue-600 transition dark:text-yellow-500 xl:inline">{t('header.greeting')}</p>{' '}
                        <br/>
                        <p
                            className="block transition font-bold xl:inline transition dark:text-slate-100">Qendrim</p>
                    </div>
                    <div
                        className="mt-12 flex justify-center transition md:justify-start text-xl text-gray-500 transition dark:text-slate-100 sm:text-xl md:max-w-3xl">
                        <Typewriter
                            words={[t('header.role'), 'Technology Enthusiast 🚀', 'Drone Lover 🚁']}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            loop={true}
                            deleteSpeed={50}
                            delaySpeed={900}
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
                                                className="cursor-default block w-full rounded-md border border-transparent bg-amber-300 px-5 py-3 text-base font-medium text-white   sm:px-10">
                                                <span className='text-2xl mr-3'>🎉</span>
                                                {t('header.messageSent')}
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    <div className="mt-12 sm:mx-auto sm:flex">
                                        <div className="relative flex-1 min-w-72 sm:w-72">
                                            <label htmlFor="cta-email" className="sr-only">
                                                {t('contact.email')}
                                            </label>
                                            <input
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: t('contact.required')
                                                    },
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                                        message: t('contact.emailInvalid')
                                                    }
                                                })}
                                                id="cta-email"
                                                type="email"
                                                className="block w-full rounded-md transition border-none ring-2 ring-blue-500 transition dark:ring-yellow-500 px-5 py-3 text-base text-gray-900 placeholder-gray-500  focus:border-transparent focus:outline-none focus:ring-2  focus:ring-blue-600 dark:focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-blue-600 dark:focus:ring-offset-yellow-500"
                                                placeholder={t('contact.email')}
                                            />
                                            {errors.email && <ErrorMessage message={errors.email.message}/>}
                                        </div>

                                        <div className="mt-4 sm:mt-0 sm:ml-3 min-w-72">
                                            <button
                                                disabled={isLoading}
                                                type="button"
                                                // @ts-ignore
                                                onClick={handleSubmit(onSubmit)}
                                                className="block w-full rounded-md transition border border-transparent bg-blue-600 transition dark:bg-yellow-500 px-5 py-3 text-base font-medium text-white dark:text-slate-900 dark:hover:bg-yellow-600 hover:bg-blue-700 focus:outline-none focus:ring-2 dark:focus:ring-yellow-500 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 dark:focus:ring-offset-yellow-500 sm:px-10"
                                            >
                                                {t('header.contactButton')}
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
                        <Image width={600} height={600} src="/assets/yellow_background.svg" alt=""
                               className='absolute w-48 md:w-full h-auto'/>
                        <Image width={600} height={600} src="/assets/qendrim.png" alt=""
                               className='h-auto md:w-112 w-96 mx-auto transform  object-cover object-center'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ErrorMessage = (props: any) => {
    const {message} = props;
    return (<span className={'absolute top-8 text-red-600 font-light mt-6'}>{message}</span>)
}
