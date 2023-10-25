import {ProjectModel} from "../../../components/models/project.model";
import {CheckIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";

const projects: ProjectModel[] = [
    {
        "client": "My own project",
        "status": 'On Hold',
        "keys": [
            {
                "description": "",
                "value": "Modern and beautiful UI"
            },
            {
                "value": "Based on Angular and Symfony API Platform (PHP)",
                "description": ""
            },
            {
                "value": "Combines my hobbies",
                "description": ""
            }
        ],
        "slug": "To combine my love for flying my drone and developing my skills, I am working on a platform where pilots can sell their footage. For the development of the platform I use the programming language GO together in a microservice architecture. For the frontend Angular is used.",
        "title": "Dronegraphy",
        "img": "/projects/drone.svg",
        "order": 0,
        "rollout": {
            "seconds": 1685570400,
            "nanoseconds": 455000000
        },
        "description": "With dronegraphy I combine multiple passions of mine. As I love making impressing films and know how to code, this was some kind of natural outcome. Dronegraphy will be some kind of platform, in which people can buy and sell drone footage. In addition a forum will help drone lovers come together. As of now, dronegraphy is still in development as a side project of mine.",
        "previewLink": "",
        "id": "MCY6ucNmsf07AhdbLNW4"
    },
    {
        "slug": "I built a web-app to manage inventory, optimize supply chain and communicate with suppliers and customers for a polymer company.",
        "status": 'Completed',
        "keys": [
            {
                "value": "Inventory Management",
                "description": "The system allows for real-time tracking and management of merchandise inventory, including products, stock levels, and orders."
            },
            {
                "description": "The system provides real-time reporting and analysis on sales and inventory data, enabling the company to make informed business decisions.",
                "value": "Data Analysis and Reporting"
            },
            {
                "description": "It allows the company to optimize their supply chain operations and make better decisions.",
                "value": "Supply Chain Optimization"
            },
            {
                "value": "Communication",
                "description": "The system facilitates easy communication with suppliers and customers, streamlining the ordering and fulfillment process."
            }
        ],
        "stats": [
            {
                "key": "Increased Sales",
                "value": "15%"
            },
            {
                "value": "25%",
                "key": "Increased Efficiency"
            },
            {
                "value": "10%",
                "key": "Reduced Costs"
            },
            {
                "value": "20%",
                "key": "Increased Customer Satisfaction"
            }
        ],
        "rollout": {
            "seconds": 1672527600,
            "nanoseconds": 588000000
        },
        "title": "NSB Platform",
        "description": "I built a web-based merchandise management system for a global medium-sized enterprise that specializes in the polymer industry. The system, which I developed, allows the company to effectively manage and track their merchandise inventory including products, stock levels, and orders. It also provides real-time reporting and analysis on sales and inventory data, enabling the company to make informed business decisions and optimize their supply chain operations. Additionally, the system facilitates easy communication with suppliers and customers, streamlining the ordering and fulfillment process. Overall, this system which I created, is a powerful tool for managing and growing the company's polymer-based business.",
        "img": "/projects/nsb.png",
        "previewLink": "",
        "client": "NSB Polymers GmbH",
        "id": "mp2ileCebA9JFVOvicXC"
    },
    {
        "rollout": {
            "seconds": 1672441200,
            "nanoseconds": 89000000
        },
        "status": 'Completed',
        "title": "Design Verification Process Platform",
        "description": "The web app is a platform used by over 500 engineers for verifying product design. It provides a variety of tools and features that are designed to help engineers ensure that their designs meet quality standards, including simulations, tests, and real-time collaboration. Additionally, it has an PTC Integrity Interface and a configuration matrix, which allow for easy integration with other tools and software, and easy testing and validation of different product configurations respectively. The app is user-friendly and intuitive, making it easy for engineers to access the tools and information they need.",
        "client": "Rolls Royce Power Systems",
        "keys": [
            {
                "value": "Quality assurance tools and features",
                "description": "The web app provides a variety of tools and features to help engineers ensure their designs meet quality standards."
            },
            {
                "value": "Easy integration with other tools",
                "description": "The PTC Integrity Interface allows for easy integration with other tools and software."
            },
            {
                "description": "The Configuration matrix allows for easy testing and validation of different product configurations.",
                "value": "Test and validate product configurations"
            },
            {
                "value": "User-friendly interface",
                "description": "The app is user-friendly and intuitive, making it easy for engineers to access the tools and information they need."
            }
        ],
        "stats": [
            {
                "key": " Time reduction",
                "value": "40%"
            },
            {
                "value": "98%",
                "key": "Efficiency increase"
            },
            {
                "key": "Error reduction",
                "value": "25%"
            },
            {
                "value": "2000",
                "key": "Users"
            }
        ],
        "slug": "The DVP Platform provides engineers with tools and features to verify product designs, including PTC Integrity Interface and Configuration Matrix for easy integration and testing. User-friendly interface is also included.",
        "img": "/projects/dvp.png",
        "previewLink": "",
        "id": "EY3jOKflgVQdm0gRpN0S"
    },
    {
        "slug": "A modern website for an employee coaching service using a karate principle, with resources, testimonials and easy communication. Developed as a one-man project",
        "img": "/projects/dkp.png",
        "description": "I am proud to present the new website for \"Das Karateprinzip\", a company specializing in employee coaching using a unique karate principle. I designed and developed this website from scratch, working alone on the project. The website showcases the client's coaching services and the benefits of incorporating karate principles into the workplace. The website features a modern design, easy navigation and includes resources such as client testimonials, blog posts and a contact form. My goal was to create a user-friendly and professional website that accurately represents the client's unique approach to employee coaching and I am proud to have delivered a final product that exceeds their expectations.",
        "rollout": {
            "seconds": 1640905200,
            "nanoseconds": 707000000
        },
        "status": 'Completed',
        "title": "Das Karateprinzip",
        "client": "Markus Sauter",
        "keys": [
            {
                "value": "Unique approach",
                "description": "The website highlights the client's unique approach to employee coaching using a special karate principle."
            },
            {
                "description": "The website features a modern and professional design, which enhances the user experience.",
                "value": "Modern design"
            },
            {
                "description": "The website includes resources such as client testimonials, blog posts and a contact form, providing valuable information and making it easy for customers to get in touch with the client.",
                "value": "Resources"
            },
            {
                "value": "Personalized experience",
                "description": "The website was developed as a one-man project, providing a personalized experience tailored to the client's needs."
            }
        ],
        "stats": [
            {
                "value": "50%",
                "key": "Website traffic increased"
            },
            {
                "value": "20 per week",
                "key": "Contact form submissions"
            },
            {
                "key": "Blog post views",
                "value": "100 per post"
            },
            {
                "value": "75%",
                "key": "Client retention rate"
            }
        ],
        "previewLink": "",
        "id": "rBLOql6pv2dNDO0wUVHV"
    },
    {
        "rollout": {
            "seconds": 1638226800,
            "nanoseconds": 839000000
        },
        "status": 'Completed',
        "client": "Rolls Royce Power Systems",
        "slug": "This is a tool for Rolls Royce Power Systems that simplifies project change management across multiple divisions with flexibility, increasing productivity, and improving efficiency.",
        "title": "Project Change Management",
        "previewLink": "",
        "img": "/projects/pcm.png",
        "stats": [
            {
                "key": "Time-saving",
                "value": "30%"
            },
            {
                "value": "40%",
                "key": "Error reduction"
            },
            {
                "value": "25%",
                "key": "Increased collaboration"
            },
            {
                "key": "mproved communication",
                "value": "45%"
            }
        ],
        "description": "This is a cutting-edge tool that was developed specifically for Rolls Royce Power Systems. The tool is designed to streamline the process of project change management, allowing users to easily and efficiently manage changes to projects across multiple divisions. The tool has been developed with flexibility in mind, enabling users to easily implement changes and ensure that all projects remain on track. With this tool, users can now perform proper project change management on every project in multiple divisions, which will help to increase productivity and reduce the risk of delays or other issues arising. The tool is user-friendly, easy to use, and will help to improve the overall efficiency of the project management process. This tool is a valuable addition to the Rolls Royce Power Systems project management toolkit, and will help to ensure that projects are delivered on time and to the highest possible standard.",
        "keys": [
            {
                "description": "The tool simplifies the process of managing changes to projects across multiple divisions.",
                "value": "Streamlines project change management"
            },
            {
                "description": "The tool has been designed with flexibility in mind, allowing users to easily implement changes and ensure that all projects remain on track.",
                "value": "Flexibility"
            },
            {
                "description": " With this tool, users can now perform proper project change management on every project in multiple divisions, which will help to increase productivity.",
                "value": "Increased productivity"
            },
            {
                "value": "Improved efficiency",
                "description": "The tool is user-friendly, easy to use, and will help to improve the overall efficiency of the project management process."
            }
        ],
        "id": "zriG3XmfpxAs6eVnnMiL"
    },
    {
        "client": "newboxes GmbH",
        "status": 'Completed',
        "keys": [
            {
                "value": "Visually stunning design",
                "description": "The website has a clean and modern design that is visually appealing, making it easy for visitors to navigate and find the information they need."
            },
            {
                "description": "The website includes a portfolio section that showcases the company's past and current projects and use cases, highlighting their expertise and capabilities in the technology field.",
                "value": "Highlighting of company expertise"
            },
            {
                "description": "The website is designed with easy navigation in mind, making it simple for visitors to find the information they need quickly and easily.",
                "value": "Easy navigation"
            },
            {
                "value": "Marketing tool",
                "description": "The website serves as an effective tool for promoting the company and its services to potential clients and partners."
            }
        ],
        "previewLink": "https://newboxes.com",
        "rollout": {
            "seconds": 1627682400,
            "nanoseconds": 357000000
        },
        "img": "/projects/nb.png",
        "slug": "I have developed a website for my current employer that showcases their technology projects and use cases, featuring a clean, modern design and easy navigation, with a portfolio section to highlight their capabilities and expertise in the field.",
        "stats": [
            {
                "key": "Bounce rate",
                "value": "25%"
            },
            {
                "value": "3 minutes",
                "key": "Average session duration"
            },
            {
                "value": "100",
                "key": "Unique visitors per day"
            },
            {
                "value": "5%",
                "key": "Conversion rate"
            }
        ],
        "description": "​ I have created a new and visually stunning website for my current employer, which showcases our company's various projects and use cases in technology. The website features a clean, modern design and easy navigation, making it easy for visitors to find the information they need. The website also includes a portfolio section where we showcase our past and current projects and use cases, highlighting our expertise and capabilities in the technology field. Overall, the website serves as an effective tool for promoting our company and its services to potential clients and partners.",
        "title": "newboxes Website",
        "id": "VcXlbmMFPx92SyFTLUxF"
    },
    {
        "keys": [
            {
                "value": "Improved communication and collaboration",
                "description": "Improved communication and collaboration among safety officers within the company"
            },
            {
                "value": "Easy sharing of incidents and lessons learned",
                "description": "Easy sharing of incidents and lessons learned, leading to better risk management and prevention of similar incidents in the future"
            },
            {
                "value": "User-friendly interface",
                "description": "A more user-friendly interface that makes it easier for safety officers to access and share information"
            },
            {
                "description": "Better ability for the company to stay informed about and respond to safety issues in a timely manner",
                "value": "Timely response to safety issues"
            },
            {
                "description": "Increased efficiency and effectiveness of the company's health, safety, and environmental initiatives.",
                "value": "Increased efficiency and effectiveness of HSE initiatives."
            }
        ],
        "status": 'Completed',
        "rollout": {
            "seconds": 1601416800,
            "nanoseconds": 640000000
        },
        "previewLink": "",
        "stats": [
            {
                "value": "95%",
                "key": "user satisfaction"
            },
            {
                "value": "75%",
                "key": "reduction in incidents"
            },
            {
                "key": "improved communication and collaboration",
                "value": "90%"
            },
            {
                "value": "50%",
                "key": "decrease in response time"
            }
        ],
        "slug": "A new intranet to enhance communication, sharing, user-friendliness, timely response, and efficiency in HSE matters for Rolls Royce Power Systems.",
        "title": "Company-wide Intranet for Health, Safety & Environment",
        "description": "The project was the creation of a new intranet for the Health, Safety & Environment Community within Rolls Royce Power Systems. The intranet features a new user interface and multiple new features such as the ability to share incidents and lessons learned. The new intranet makes it easier for safety officers from around the world within the company to connect and stay up to date.",
        "client": "Rolls Royce Power Systems",
        "img": "/projects/intranet.svg",
        "id": "HiGJO45S7KXz08d4BzBS"
    },
    {
        "rollout": {
            "seconds": 1598824800,
            "nanoseconds": 74000000
        },
        "status": 'Completed',
        "client": "Rolls Royce Power Systems",
        "description": "I led the development of a global online platform for Rolls Royce Power Systems to track progress towards achieving company-wide environmental goals. The platform includes a dashboard with real-time data, reports and analytics, and educational resources. It helps the company to stay informed and make progress towards its environmental targets.",
        "previewLink": "",
        "slug": "A global platform to track and measure Rolls Royce Power Systems' environmental progress with real-time data, analytics and educational resources.",
        "keys": [
            {
                "value": "Real-time tracking",
                "description": "The platform provides real-time data and updates on key environmental metrics, enabling the company to quickly identify areas where progress is being made and areas where additional efforts are needed."
            },
            {
                "value": "Global accessibility",
                "description": "The platform is designed to be accessible to users globally, allowing employees and stakeholders from different regions to stay informed about the company's environmental goals and progress."
            },
            {
                "value": "Educational resources",
                "description": "The platform includes a range of educational resources and training materials to help employees understand the importance of environmental sustainability and how they can contribute to the company's efforts."
            },
            {
                "description": "The platform includes a range of reports and analytics that can be used to identify areas where the company is making progress, and areas where additional efforts are needed, this help the company to make data-driven decision making.",
                "value": "Data-driven decision making"
            }
        ],
        "title": "Environmental Management Platform",
        "stats": [
            {
                "key": "Users",
                "value": "15000"
            },
            {
                "key": "Carbon footprint reduction",
                "value": "12%"
            },
            {
                "key": "user engagement rate",
                "value": "85%"
            },
            {
                "value": "20%",
                "key": "increase in environmental performance score"
            }
        ],
        "img": "/projects/env.svg",
        "id": "T7vAS1Skq8OKjCjictPJ"
    },
    {
        "title": "Heat & Power Web Presence",
        "status": 'Completed',
        "keys": [
            {
                "description": "Website has been designed and developed for the company Heat & Power I",
                "value": "Website creation"
            },
            {
                "description": "Website presents all the company's services and allows potential customers to contact the company",
                "value": "Services presentation"
            },
            {
                "value": "Unique branding",
                "description": "A unique company logo has been designed for the website and all other branding materials"
            },
            {
                "description": "The goal of the project is to establish a strong online presence for the company, making it easy for clients to learn about their services and get in touch with them.",
                "value": "Online presence"
            }
        ],
        "img": "/projects/hp.png",
        "slug": "This project created a website for Heat & Power I, including a unique logo, to showcase services and allow for customer contact, to establish a strong online presence for the company.",
        "rollout": {
            "seconds": 1582930800,
            "nanoseconds": 876000000
        },
        "previewLink": "https://hp-heizungsbau.de/",
        "description": "This project involved creating a comprehensive website for the company Heat & Power I, featuring all of their services and providing a platform for potential customers to contact them. The project also included designing a unique company logo to be used on the website and all other branding materials. The goal was to establish a strong online presence for the company, making it easy for clients to learn about their services and get in touch with them.",
        "stats": [
            {
                "value": "5 minutes",
                "key": "Visit duration"
            },
            {
                "key": "Mobile users",
                "value": "75%"
            },
            {
                "value": "40%",
                "key": "Bounce rate"
            },
            {
                "value": "1000",
                "key": "Daily visitors"
            }
        ],
        "client": "Heat & Power",
        "id": "zk8nLAI5YmjyapsBSIGM"
    },
    {
        "keys": [
            {
                "description": "The tool accelerates the speed of preparation and follow-up for MindSphere trainings, reducing the time it takes to organize and deliver trainings.",
                "value": "Speed"
            },
            {
                "value": "Automation",
                "description": "The tool automates various tasks such as handling participant data, generating certificates, watermarking training documents, and sending them to customers, which eliminates the need for manual intervention and reduces the chances of errors."
            },
            {
                "value": "Convenience",
                "description": "The tool makes it more convenient for customers to receive their certificates and training materials, which improves their overall experience of the training."
            },
            {
                "description": "The tool helps the MindSphere Academy team to deliver high-quality trainings in a more timely and organized manner, which improves the overall efficiency of the training process.",
                "value": "Efficiency"
            }
        ],
        "status": 'Completed',
        "rollout": {
            "seconds": 1553986800,
            "nanoseconds": 991000000
        },
        "previewLink": "",
        "img": "/projects/training.svg",
        "stats": [
            {
                "key": "Attendees/session",
                "value": "100"
            },
            {
                "key": "Certificates generation and sending time",
                "value": "5 minutes"
            },
            {
                "value": "10 minutes",
                "key": "Training documents watermarking and sending time"
            },
            {
                "key": "Time reduction",
                "value": "60%"
            }
        ],
        "client": "Siemens Digital Industries GmbH",
        "title": "Training Management Tool",
        "description": "As part of the MindSphere Academy team at Siemens Industry Software GmbH, I created a tool that accelerates the speed of preparation and follow-up for MindSphere trainings. The tool automates the process of handling participant data, generating certificates, watermarking training documents, and sending them to customers with a single click. This tool was developed by me to improve the overall efficiency and convenience of the training process for both the academy team and the customers. With my tool in place, the MindSphere Academy is able to deliver high-quality trainings in a more timely and organized manner.",
        "slug": "The MindSphere Academy tool automates training preparation and follow-up tasks, improving efficiency and convenience.",
        "id": "eA9w9v31dsXKFiv54t4d"
    },
    {
        "client": "Institute of Informationmanagement in Engineering at KIT",
        "status": 'Completed',
        "img": "/projects/virtual.png",
        "slug": "Core developer in Virtual Engineering Internship, responsible for VR-game communication, navigation, camera perspectives, video editing, 3D modeling, and key team member.",
        "rollout": {
            "seconds": 1533074400,
            "nanoseconds": 856000000
        },
        "previewLink": "https://www.youtube.com/watch?v=okImWn8YrLo&themeRefresh=1",
        "description": "As a core developer on the team, I was a vital member of the Virtual Engineering Internship. My responsibilities were diverse and multi-faceted, and I made significant contributions to the success of the project.  One of my main tasks was developing the communication between the VR environment and the game Factorio. This required a deep understanding of both the VR technology and the game's mechanics, as well as the ability to bridge the two and create a seamless user experience.  In addition to this, I also developed the navigation and camera perspectives within the VR environment. This required a strong sense of spatial awareness, as well as the ability to create intuitive controls that would allow users to easily move around and explore the virtual space.  Lastly, I was also responsible for video editing and modeling tasks for the VR environment. This required an eye for detail and a strong understanding of 3D modeling software. I used these skills to create engaging and realistic virtual spaces that users could explore and interact with.  Overall, my contributions to the Virtual Engineering Internship were significant and I played a key role in the success of the project.",
        "title": "Virtual Engineering Practical Course",
        "stats": [
            {
                "value": "",
                "key": ""
            }
        ],
        "keys": [
            {
                "description": "As a part of the Virtual Engineering Internship team, I gained experience in creating a seamless integration between a virtual reality environment and a game, Factorio.",
                "value": "Proficient in developing communication between VR environments and games"
            },
            {
                "description": "During my time in the internship, I developed intuitive navigation and camera perspectives within the VR environment, which is a vital aspect for a user to easily move around and explore the virtual space.",
                "value": "Skilled in navigation and camera perspectives development"
            },
            {
                "value": "Experience in video editing and 3D modeling",
                "description": "I gained experience in video editing and 3D modeling through my work in the Virtual Engineering Internship, which included creating engaging and realistic virtual spaces that users can explore and interact with."
            },
            {
                "description": "As a core developer on the team, I was a vital member of the Virtual Engineering Internship, making significant contributions to the success of the project and played a key role in the team.",
                "value": "Key member of the core developer team"
            }
        ],
        "id": "ineoDQ7r2xUCm3105Hj0"
    }
]

export default function ProjectDetails() {
    const router = useRouter()
    const {id} = router.query;

    const data: ProjectModel = projects.filter(obj => obj.id === id)[0]

    if (!data) return null


    return (
        <div className={''}>
            <div className="relative bg-white py-16 sm:py-24 dark:bg-slate-900">
                <div
                    className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 lg:overflow-visible">
                    <div className="relative sm:py-16 lg:py-0 lg:sticky lg:top-0">
                        <div aria-hidden="true"
                             className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"/>
                            <svg
                                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4}
                                              className="text-gray-200 dark:text-slate-800"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                            </svg>
                        </div>
                        <div
                            className="relative lg:absolute lg:right-0 lg:w-[48rem] mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20 ">
                            <div className="relative overflow-hidden rounded-2xl pt-[56.25%] pb-10 ">
                                <Image width={640} height={400}
                                       className="absolute inset-0 h-full w-full "
                                       src={data?.img}
                                       alt={data?.title}
                                />
                            </div>
                            <Link target="_blank" href={data?.previewLink ?? ''}
                                  className={'flex mx-auto w-max h-max mt-4 relative'}>
                                <button
                                    disabled={!data?.previewLink}
                                    type="button"
                                    className="relative mx-auto disabled:bg-gray-300 dark:disabled:bg-slate-700 dark:disabled:text-slate-400 block dark:bg-yellow-500 dark:text-slate-900 rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
                                >
                                    Live Preview
                                </button>
                            </Link>
                            {data?.previewLink ? null :
                                <p className={'w-full text-center mt-2 text-gray-400 dark:text-slate-600'}>Only visible
                                    at the customers
                                    site</p>}
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                        {/* Content area */}
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <div className={'flex justify-start items-start '}>
                                <h2 className="mr-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
                                    {data?.title}
                                </h2>
                                {data?.status === 'On Hold' &&
                                    <>
                                        <span
                                            className={'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20'}>
                                            {data?.status}
                                        </span>
                                    </>
                                }
                                {data?.status === 'Completed' &&
                                    <>
                                        <span
                                            className={'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'}>
                                            {data?.status}
                                        </span>
                                    </>
                                }
                                {data?.status === 'Canceled' &&
                                    <>
                                        <span
                                            className={'inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'}>
                                            {data?.status}
                                        </span>
                                    </>
                                }
                                {data?.status === 'In Progress' &&
                                    <>
                                        <span
                                            className={'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'}>
                                            {data?.status}
                                        </span>
                                    </>
                                }
                            </div>

                            <div className="mt-6 space-y-6 text-gray-500 dark:text-slate-300">
                                <p className="text-lg">
                                    {data?.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 space-y-10">
                            {data?.keys.map((item, index) => (
                                <div key={index} className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex h-8 w-8 items-start justify-start rounded-xl text-blue-600 dark:text-yellow-500">
                                            <CheckIcon className="h-8 w-8" aria-hidden="true"/>
                                        </div>
                                        <p className="ml-12 text-lg font-medium leading-6 text-gray-900 dark:text-slate-100">{item.value}</p>
                                    </dt>
                                    <dd className="mt-2 ml-12 text-base text-gray-500 dark:text-slate-300">{item.description}</dd>
                                </div>
                            ))}
                        </div>

                        {/* Stats section */}
                        <div className="mt-10">
                            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                                {data?.stats?.map((stat, index) => (
                                    <div key={index} className="border-t-2 border-gray-100 dark:border-slate-700 pt-6">
                                        <dt className="text-base font-medium text-gray-500 dark:text-slate-100">{stat.key}</dt>
                                        <dd className="text-3xl font-bold tracking-tight text-gray-900 dark:text-yellow-500">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
