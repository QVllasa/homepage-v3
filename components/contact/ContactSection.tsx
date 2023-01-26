import {ContactDialog} from "../dialogs/ContactDialog";
import {PropsWithChildren, useRef, useState} from "react";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {useFirebaseApp} from "reactfire";
import {SubmitHandler, useForm} from "react-hook-form";

type ContactDialogProps = PropsWithChildren<{ open: () => {} }>;

type Email = {
    email: string,
};
export default function ContactSection() {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const ref = useRef<ContactDialogProps>(null);
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
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
        <div className={'dark:bg-slate-900'}>
            <div className="relative mx-auto py-16 lg:py-24 px-6 lg:max-w-7xl lg:px-8">
                <div className="relative mx-auto max-w-xl  lg:max-w-7xl lg:px-8">
                    <div
                        className="relative transition overflow-hidden rounded-2xl bg-blue-600 dark:bg-yellow-500  px-6 py-10  sm:px-12 sm:py-20">
                        <div className="relative">
                            <div className="sm:text-center">
                                <h2 className="text-3xl transition font-bold tracking-tight text-slate-100 dark:text-black sm:text-4xl ">
                                    Project in mind?
                                    <br/>
                                    Let&apos;s talk!
                                </h2>
                                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 dark:text-slate-900">
                                    Let me reach out to you by droping your e-mail
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
                                                        I will reach out to you!
                                                    </button>
                                                </div>
                                            </div>
                                            :
                                            <div className="sm:mx-auto sm:flex">
                                                <div className="relative flex-1 min-w-72 sm:w-72">
                                                    <label htmlFor="cta-email" className="sr-only">
                                                        Email address
                                                    </label>
                                                    <input
                                                        {...register("email", {
                                                            required: {
                                                                value: true,
                                                                message: 'Field is required'
                                                            },
                                                            pattern: {
                                                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                                                message: 'Not a valid E-Mail'
                                                            }
                                                        })}
                                                        id="cta-email"
                                                        type="email"
                                                        className="block w-full rounded-md transition border-none ring-2 ring-blue-500 transition dark:ring-yellow-500 px-5 py-3 text-base text-gray-900 placeholder-gray-500  focus:border-transparent focus:outline-none focus:ring-2  focus:ring-blue-600 dark:focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-blue-600 dark:focus:ring-offset-yellow-500"
                                                        placeholder="Enter your email"
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
                                                        Yes, contact me!
                                                    </button>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-8 ">
                                <span className='text-black text-lg text-slate-300 dark:text-slate-900'>or contact me
                                    directly</span>
                                <br/>
                                <button
                                    type='button'
                                    onClick={() => ref?.current?.open()}
                                    className="block w-full rounded-md border border-transparent bg-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white py-3 px-5 text-center text-base font-medium text-blue-700  hover:bg-gray-50 sm:inline-block sm:w-auto"
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactDialog ref={ref}/>
            </div>
        </div>

    )
}


const ErrorMessage = (props: any) => {
    const {message} = props;
    return (<span className={'absolute top-8 text-red-600 font-light mt-6'}>{message}</span>)
}
