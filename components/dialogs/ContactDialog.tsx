import {ForwardedRef, forwardRef, Fragment, useImperativeHandle, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {useFirebaseApp} from "reactfire";
import {TailSpin} from "react-loader-spinner";
import {FieldValues, useForm} from "react-hook-form";


export const ContactDialog = forwardRef(function ContactDialog(props: any, ref: ForwardedRef<any>){
    const [show, setShow] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const {register, handleSubmit, watch, formState: {errors}} = useForm();


    const onSubmit = (data:FieldValues) => {
        setIsLoading(true);
            addDoc(collection(firestore, "mail"), {
                to: ['qendrim.vllasa@gmail.com'],
                message: {
                    subject: `Hello from ${data.name}`,
                    text: `Email from: ${data.email}  
                    ${data.message}`,
                }
            }).then(() => {
                setIsLoading(false);
                setSubmitted(true);
            }).catch((err) => {
                console.error(err);
            });
    };

    const open = ()=>{
        setSubmitted(false);
        setShow(true);
    }
    useImperativeHandle(ref, () => ({ open }), []);



    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => {
                isLoading ? setShow(true) : setShow(false)
            }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden  rounded-lg bg-white px-4 pt-5 pb-4 text-left  transition-all sm:my-8 w-full  md:max-w-sm sm:p-6">
                                {() => {
                                    if (isSubmitted && !isLoading) {
                                        return <div className='flex flex-col justify-center items-center text-xl'>
                                            <span className='text-3xl'>🥳</span>
                                            Danke für deine Nachricht!
                                            <button
                                                onClick={() => setShow(false)}
                                                className="mt-4 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white  hover:bg-blue-700"
                                            >
                                                Back
                                            </button>
                                        </div>
                                    }else if (!isSubmitted && isLoading){
                                        return <div className='flex justify-center'>
                                            <TailSpin
                                                height="80"
                                                width="80"
                                                color="#4fa94d"
                                                ariaLabel="tail-spin-loading"
                                                radius="1"
                                                wrapperStyle={{}}
                                                wrapperClass="mx-auto"
                                                visible={true}
                                            />
                                        </div>

                                    }else {
                                        return <div>
                                            <span
                                                className="text-3xl mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                                👋
                                            </span>
                                            <div className="mt-3 text-center sm:mt-5">
                                                <Dialog.Title as="h3"
                                                              className="text-lg font-medium leading-6 text-gray-900">
                                                    Say Hi!
                                                </Dialog.Title>
                                                <form className=" mt-6 grid grid-cols-1 gap-y-6">
                                                    <div className={'relative'}>
                                                        <label htmlFor="name" className="sr-only">
                                                            Full name
                                                        </label>
                                                        <input
                                                            autoComplete="name"
                                                            className="block w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500  focus:border-blue-500 focus:ring-blue-500"
                                                            placeholder="Name"
                                                            {...register('name', {
                                                                required: {
                                                                    value: true,
                                                                    message: 'Field is required'
                                                                }
                                                            })}
                                                        />
                                                        {errors.email && <ErrorMessage message={errors.email.message}/>}
                                                    </div>
                                                    <div className={'relative'}>
                                                        <label htmlFor="email" className="sr-only">
                                                            Email
                                                        </label>
                                                        <input
                                                            autoComplete="email"
                                                            className="block w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                                                            placeholder="*Email"
                                                            {...register('email', {
                                                                required: {
                                                                    value: true,
                                                                    message: 'Field is required'
                                                                },
                                                                pattern: {
                                                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                                                    message: 'Not a valid E-Mail'
                                                                }
                                                            })}
                                                        />
                                                        {errors.email && <ErrorMessage message={errors.email.message}/>}
                                                    </div>
                                                    <div className={'relative'}>
                                                        <label htmlFor="message" className="sr-only">
                                                            Message
                                                        </label>
                                                        <textarea
                                                            id="message"
                                                            {...register('message', {
                                                                required: {
                                                                    value: true,
                                                                    message: 'Field is required'
                                                                }
                                                            })}
                                                            rows={4}
                                                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500  focus:border-blue-500 focus:ring-blue-500"
                                                            placeholder="Message"
                                                            defaultValue={''}
                                                        />
                                                        {errors.message &&
                                                            <ErrorMessage message={errors.message.message}/>}
                                                    </div>
                                                    <div className="mt-5 sm:mt-6">
                                                        <button onClick={handleSubmit(onSubmit)}
                                                                type="button"
                                                            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white  hover:bg-blue-700"
                                                        >
                                                            Send
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    }
                                }
                                }
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
});


const ErrorMessage = (props: any) => {
    const {message} = props;
    return (<span className={'absolute top-8 text-red-600 font-light mt-6'}>{message}</span>)
}
