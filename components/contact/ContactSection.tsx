import {useState} from "react";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {useFirebaseApp} from "reactfire";
import {SubmitHandler, useForm} from "react-hook-form";
import {useTranslation} from 'next-i18next';

type Email = {
    email: string,
};
export default function ContactSection() {
    const {t} = useTranslation();
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit: SubmitHandler<Email> = (data: { email: string }) => {
        console.log("data:", data);
        if (!data.email) return
        setIsLoading(true);
        addDoc(collection(firestore, "mail"), {
            to: ['qendrim.vllasa@gmail.com'],
            message: {
                subject: `Contact Request: ${data.email}`,
                text: "Kontaktanfrage von: " + data.email,
            }
        }).then(() => {
            setIsLoading(false);
            setEmailSubmitted(true);
        });
    };

    return (
        <div className={'dark:bg-slate-900'} id="contact-section">
            <div className="relative mx-auto py-16 lg:py-24 px-6 lg:max-w-7xl lg:px-8">
                <div className="relative mx-auto max-w-xl  lg:max-w-7xl lg:px-8">
                    <div
                        className="relative transition overflow-hidden rounded-2xl bg-blue-600 dark:bg-yellow-500  px-6 py-10  sm:px-12 sm:py-20">
                        <div className="relative">
                            <div className="sm:text-center">
                                <h2 className="text-3xl transition font-bold tracking-tight text-slate-100 dark:text-black sm:text-4xl ">
                                    {t('contact.heading')}
                                    <br/>
                                    {t('contact.subheading')}
                                </h2>
                                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 dark:text-slate-900">
                                    {t('contact.description')}
                                </p>
                            </div>
                            <div className="mt-12 sm:mx-auto sm:flex sm:max-w-lg justify-center">
                                <div>
                                    {
                                        emailSubmitted ?
                                            <div className="sm:mx-auto sm:flex sm:max-w-lg">
                                                <div className="sm:mt-0">
                                                    <button
                                                        type="button"
                                                        className="cursor-default block w-full rounded-md border border-transparent bg-green-500 px-5 py-3 text-base font-medium text-white   sm:px-10">
                                                        <span className='text-2xl mr-3'>🎉</span>
                                                        {t('header.messageSent')}
                                                    </button>
                                                </div>
                                            </div>
                                            :
                                            <div className="sm:mx-auto sm:flex">
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
                                                        placeholder={t('contact.enterEmail')}
                                                    />
                                                    {errors.email && <ErrorMessage message={errors.email.message}/>}
                                                </div>
                                                <div className="mt-4 sm:mt-0 sm:ml-3 min-w-72">
                                                    <button
                                                        disabled={isLoading}
                                                        type="button"
                                                        // @ts-ignore
                                                        onClick={handleSubmit(onSubmit)}
                                                        className="block w-full rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white  hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
                                                    >
                                                        {t('contact.submitButton')}
                                                    </button>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ErrorMessage = (props: any) => {
    const {message} = props;
    return (<span className={'absolute top-12 text-red-600 font-light'}>{message}</span>)
}
