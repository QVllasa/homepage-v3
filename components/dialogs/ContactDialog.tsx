import {ForwardedRef, forwardRef, useImperativeHandle, useState} from 'react'
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {useFirebaseApp} from "reactfire";
import {TailSpin} from "react-loader-spinner";
import {FieldValues, useForm} from "react-hook-form";

// Import Shadcn UI components
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "../../components/ui/dialog";
import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import {Label} from "../../components/ui/label";
import {Textarea} from "../../components/ui/textarea";

export const ContactDialog = forwardRef(function ContactDialog(props: any, ref: ForwardedRef<any>) {
    const [open, setOpen] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const app = useFirebaseApp();
    const firestore = getFirestore(app);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data: FieldValues) => {
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

    const openDialog = () => {
        setSubmitted(false);
        setOpen(true);
    }

    useImperativeHandle(ref, () => ({open: openDialog}), []);

    const handleClose = () => {
        if (!isLoading) {
            setOpen(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                {isSubmitted && !isLoading ? (
                    <div className='flex flex-col justify-center items-center text-xl'>
                        <span className='text-3xl mb-4'>🥳</span>
                        <p className="mb-4">Danke für deine Nachricht!</p>
                        <Button onClick={() => setOpen(false)} className="w-full">
                            Schließen
                        </Button>
                    </div>
                ) : isLoading ? (
                    <div className='flex justify-center py-8'>
                        <TailSpin
                            height="80"
                            width="80"
                            color="#3b82f6"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass="mx-auto"
                            visible={true}
                        />
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle>Kontaktiere uns</DialogTitle>
                            <DialogDescription>
                                Fülle das Formular aus, und wir werden uns so schnell wie möglich bei dir melden.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    {...register('name', {required: true})}
                                    className={errors.name ? 'border-red-500' : ''}
                                    placeholder="Dein Name"
                                />
                                {errors.name && <p className="text-red-500 text-xs">Name wird benötigt</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                                    className={errors.email ? 'border-red-500' : ''}
                                    placeholder="deine@email.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs">Gültige Email wird benötigt</p>}
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="message">Nachricht</Label>
                                <Textarea
                                    id="message"
                                    {...register('message', {required: true})}
                                    className={errors.message ? 'border-red-500' : ''}
                                    placeholder="Deine Nachricht..."
                                    rows={4}
                                />
                                {errors.message && <p className="text-red-500 text-xs">Nachricht wird benötigt</p>}
                            </div>

                            <DialogFooter>
                                <Button type="submit" className="w-full">Senden</Button>
                            </DialogFooter>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
});
