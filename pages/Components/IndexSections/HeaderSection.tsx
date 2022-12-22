import {
    ArrowPathIcon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    EnvelopeIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon
} from '@heroicons/react/24/outline'
import {Typewriter} from "react-simple-typewriter";

const features = [
    {
        name: 'Analytics',
        href: '#',
        description: 'Get a better understanding of where your traffic is coming from.',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        href: '#',
        description: 'Speak directly to your customers in a more meaningful way.',
        icon: CursorArrowRaysIcon,
    },
    {name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon},
    {
        name: 'Integrations',
        href: '#',
        description: "Connect with third-party tools that you're already using.",
        icon: Squares2X2Icon,
    },
    {
        name: 'Automations',
        href: '#',
        description: 'Build strategic funnels that will drive your customers to convert',
        icon: ArrowPathIcon,
    },
]
const callsToAction = [
    {name: 'Watch Demo', href: '#', icon: PlayIcon},
    {name: 'Contact Sales', href: '#', icon: PhoneIcon},
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    {name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon},
]
const recentPosts = [
    {id: 1, name: 'Boost your conversion rate', href: '#'},
    {id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#'},
    {id: 3, name: 'Improve your customer experience', href: '#'},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderSection() {
    return (
        <div className="relative bg-white">
            <div className="relative grid grid-cols-2 mx-auto w-full h-auto max-w-screen-2xl  lg:text-left place-items-center">
                <div className="px-4">
                    <h1 className="text-4xl  tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block font-medium text-blue-600 xl:inline">Hi, I am</span>{' '}
                        <br/>
                        <span
                            className="block font-bold xl:inline underline decoration-yellow-400 decoration-4 underline-offset-3">Qendrim
                            Vllasa</span>
                    </h1>
                    <div className="mx-auto mt-12 max-w-md text-2xl text-gray-500 sm:text-xl md:max-w-3xl">
                        <Typewriter
                            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={600}
                        />
                    </div>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div>
                            <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                                <div className="min-w-0 flex-1">
                                    <label htmlFor="cta-email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="cta-email"
                                        type="email"
                                        className="block w-full rounded-md border-none ring-2 ring-blue-500 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-3">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                                    >
                                        Yes, contact me!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-screen overflow-hidden flex justify-center items-center -mt-24">
                    <img src="/yellow_background.svg" alt="" className='w-full h-auto'/>
                    <img src="/qendrim.png" alt="" className='h-auto w-144 absolute bottom-0 left-0 right-0 mx-auto grayscale transform -scale-x-100'/>
                </div>
            </div>
        </div>
    )
}
