import {
    ArrowPathIcon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
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
        <div className="relative bg-white h-screen">
            <div
                className="relative grid md:grid-cols-2 mx-auto w-full h-full max-w-screen-2xl  lg:text-left md:place-items-center px-4">
                <div className='md:hidden flex items-center justify-center'>
                    <img className=" h-64 w-64 rounded-full object-cover bg-yellow-300 object-top" src="/assets/qendrim.png"
                         alt=""/>
                </div>
                <div>
                    <div className="text-4xl text-center sm:text-center md:text-start tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <p className="block font-medium text-blue-600 xl:inline">Hi, I am</p>{' '}
                        <br/>
                        <p
                            className="block font-bold xl:inline underline decoration-yellow-400 decoration-4 underline-offset-3">Qendrim
                            Vllasa</p>
                    </div>
                    <div className="mt-12 flex justify-center md:justify-start text-xl text-gray-500 sm:text-xl md:max-w-3xl">
                        <Typewriter
                            words={['Drone Lover 🚁', 'Technology Enthusiast 🚀','Software Engineer by ❤️']}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={600}
                        />
                    </div>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div>
                            <form action="components/IndexSections#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
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
                                        className="block w-full rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                                    >
                                        Yes, contact me!
                                    </button>
                                </div>
                            </form>
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
