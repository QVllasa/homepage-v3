import {forwardRef, Fragment, Ref, RefObject, useImperativeHandle, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'

export const ContactDialog = forwardRef(function ContactDialog(props: any, ref: Ref<RefObject<any>>){
    const [show, setShow] = useState(false);
    const [isSubmitted, setSubmitted] = useState(true);

    const loader = "assets/check2.gif";

    const open = ()=>{
        setShow(true);
    }
    useImperativeHandle(ref, () => ({ open }), []);


    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setShow}>
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
                                className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full  md:max-w-sm sm:p-6">
                                {isSubmitted ? <div className='flex flex-col justify-center items-center text-xl'>
                                    <span className='text-3xl' >🥳</span>
                                    Danke für deine Nachricht!
                                </div> :<div>
                                    <span
                                        className="text-3xl mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                        👋
                                    </span>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                            Say Hi!
                                        </Dialog.Title>
                                        <form action="#" method="POST" className=" mt-6 grid grid-cols-1 gap-y-6">
                                            <div>
                                                <label htmlFor="full-name" className="sr-only">
                                                    Full name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="full-name"
                                                    id="full-name"
                                                    autoComplete="name"
                                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                    placeholder="Full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="sr-only">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="sr-only">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={4}
                                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                    placeholder="Message"
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className="mt-5 sm:mt-6">
                                                <button
                                                    onClick={() => ref.current.open()}
                                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                                >
                                                    Send
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
         </Transition.Root>
    )
});

