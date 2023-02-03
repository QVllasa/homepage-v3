import {CheckCircleIcon,} from '@heroicons/react/24/outline'
import {useRouter} from "next/router";
import {ServiceModel} from "../../../components/models/service.model";
import Image from "next/image";
import {useEffect, useState} from "react";


const services: ServiceModel[] = [
    {
        "title": "IT Consulting for Modern Businesses",
        "slug": "Optimize you process.",
        "description": "Unlock your full potential with my IT consulting services. Let me analyze your processes and recommend the best software and tools to optimize them and give you more time for the important things. Achieve maximum efficiency and productivity with my help.",
        "key": "consulting",
        "sections": [
            {
                "keys": [
                    {
                        "description": "Our web development consultation team is composed of experienced developers who have a deep understanding of the latest technologies and trends.",
                        "title": "Expertise"
                    },
                    {
                        "title": "Customization",
                        "description": "We provide customized solutions to meet the specific needs of your business, ensuring that your website is tailored to your unique requirements."
                    },
                    {
                        "title": "Results-Driven",
                        "description": "Our consultation services are designed to help your business achieve its goals, whether it's increasing online sales, boosting website traffic, or improving customer engagement."
                    }
                ],
                "description": "I am a web developer with experience in developing and evaluating third-party web applications. I use this expertise to help people and organizations choose the best web apps for their specific needs. Let me guide you to make informed decisions and achieve your objectives.",
                "img": "/services/wac.svg",
                "title": "Web Application Consulting"
            },
            {
                "description": "I help demystify IT and show people that it can be fun and exciting. My experience and guidance can help you see the opportunities IT provides and change your perception of it.",
                "title": "Teaching",
                "img": "/services/teaching.svg",
                "keys": [
                    {
                        "description": "Our IT consulting team provides training and education services to help organizations and individuals acquire the skills and knowledge they need to succeed in the ever-changing technology landscape.",
                        "title": "Knowledge Transfer"
                    },
                    {
                        "description": "We offer customized training programs that are tailored to the specific needs of the organization or individual, ensuring that the content is relevant, engaging and effective.",
                        "title": "Tailored Content"
                    },
                    {
                        "title": "Proven Results",
                        "description": "Our training and consulting services have been proven to help organizations and individuals improve their performance, increase productivity, and achieve their goals."
                    }
                ]
            },
            {
                "keys": [
                    {
                        "description": "Our consulting team has extensive experience in developing and implementing desktop applications for various industries, giving us a deep understanding of the best practices and latest technologies in the field.",
                        "title": "Experience"
                    },
                    {
                        "title": "Scalability",
                        "description": "We offer consulting services that can be tailored to the specific needs of your organization, whether you are looking to develop a single application or a suite of applications."
                    },
                    {
                        "description": "Our desktop application consulting services are designed to help organizations increase productivity, streamline processes, and improve overall performance by leveraging the latest technologies and best practices in the field.",
                        "title": "Productivity Boost"
                    }
                ],
                "img": "/services/desktop.svg",
                "title": "Desktop Application Consulting",
                "description": "I use my experience in developing and using various desktop applications to help people and organizations choose the best one for their needs. From simple management tools to complex construction software, I have the expertise to guide you to the right solution. Let me help you make the best use of desktop technologies."
            }
        ],
        "order": 0,
        "img": ""
    },
    {
        "key": "development",
        "slug": "Development of tailor-made software.",
        "pageTitle": "I solve your problem and help you grow.",
        "order": 1,
        "description": "Stay ahead of the curve with my cutting-edge technology consulting services. I use state-of-the-art technologies and best practice workflows to deliver fast, high-quality products with consulting and support. Trust me to optimize your workflow, improve performance, and increase efficiency.",
        "img": "",
        "sections": [
            {
                "img": "/services/websites.svg",
                "keys": [
                    {
                        "title": "Increased Productivity",
                        "description": "Web applications can streamline processes and automate repetitive tasks, leading to increased productivity and efficiency for businesses."
                    },
                    {
                        "title": "Cost-Effective",
                        "description": "Developing a web application is generally more cost-effective than traditional software development, as it can be accessed from any device with an internet connection, eliminating the need for costly hardware and software updates."
                    },
                    {
                        "title": "Global Reach",
                        "description": "Web applications allow businesses to reach a global audience, providing them with the opportunity to expand their customer base and increase their revenue."
                    }
                ],
                "description": "I am a web developer who specializes in creating modern websites for companies to establish a strong online presence and enhance user experience. I also help companies refresh their web presence by redesigning and optimizing their website.",
                "title": "Websites"
            },
            {
                "keys": [
                    {
                        "title": "Scalability",
                        "description": "Web applications can easily handle an increasing number of users and a growing amount of data, making them a suitable option for businesses of any size."
                    },
                    {
                        "title": "Cost-effectiveness",
                        "description": "Web applications often have lower development and maintenance costs compared to traditional software."
                    },
                    {
                        "title": "Accessibility",
                        "description": "Web applications can be accessed from any device with an internet connection, making them easily accessible to customers and employees remotely."
                    }
                ],
                "description": "I can build a tailored, scalable, collaborative and high-performing web application that solves your problems and optimizes your workflows. I work closely with you and your team to understand your specific business needs and will deliver a high-quality, robust and reliable web application that meets your needs. Contact me to build a web application that leaves no desires open.",
                "title": "Web Application",
                "img": "/services/apps.svg"
            }
        ],
        "title": "Creating Innovative Solutions for Your Business"
    },
    {
        "order": 2,
        "description": "Unlock the power of data with my PowerBI and Tableau consulting services. Gain real-time data insights and make data-driven decisions that will give you a competitive edge and help you achieve your goals.",
        "pageTitle": "I show you things you never knew before.",
        "img": "",
        "key": "analytics",
        "sections": [
            {
                "description": "I believe in using my skills and interests to turn problems into opportunities, a mindset that allows me to help others not only find solutions to their problems but also see how they can use those problems to achieve greater things. I work with the motto \"Always turn a problem into an opportunity\" to empower others to see challenges as a means of growth and success. My ability to think creatively and see potential where others might not, helps me to assist others in reaching their goals and realizing their full potential.",
                "img": "/services/br.svg",
                "keys": [
                    {
                        "description": "Understanding the demographics of your target audience, such as age, gender, income, and education level, allows you to create targeted marketing campaigns that will be more effective in reaching and resonating with your target market.",
                        "title": "Target audience demographics"
                    },
                    {
                        "description": "Keeping up with industry trends and changes allows you to anticipate customer needs and adapt your marketing strategy accordingly, giving you a competitive edge and making your marketing efforts more effective.",
                        "title": "Industry trends"
                    },
                    {
                        "title": "Customer feedback",
                        "description": "Gathering customer feedback through surveys, focus groups, and other research methods allows you to understand customer satisfaction, identify areas for improvement, and measure the effectiveness of your marketing campaigns. This information can be used to make adjustments to your marketing strategy and improve customer retention."
                    }
                ],
                "title": "Busines Research"
            },
            {
                "description": "I use data analytics tools such as PowerBI and Tableau to visualize trends and provide clients with valuable insights into their business. The ability to uncover unexpected trends and insights through data analysis fascinates me and I am passionate about using data to help businesses make better decisions and succeed.",
                "keys": [
                    {
                        "title": "Data-driven decision making",
                        "description": "Business analytics provides marketers with the ability to make data-driven decisions, by analyzing data from various sources such as customer demographics, website traffic, and sales figures. This allows them to identify key trends, patterns and customer behaviors, providing insights that inform their marketing strategy, and improve ROI."
                    },
                    {
                        "title": "Marketing performance measurement",
                        "description": "Business analytics enables marketers to measure the performance of their marketing campaigns, by tracking metrics such as website traffic, lead generation, conversion rates and revenue. This helps them to identify which campaigns are working well and which need to be improved."
                    },
                    {
                        "title": "Segmentation and personalization",
                        "description": "Business analytics enables marketers to segment their customer base and tailor their marketing efforts to different groups. By analyzing data on customer demographics, behavior and purchase history, marketers can create personalized messages and offers that are more likely to resonate with their target audience, resulting in higher conversion rates and customer retention."
                    }
                ],
                "title": "Business Analytics",
                "img": "/services/ba.svg"
            }
        ],
        "title": "Unlock the Power of Analytics for Your Business",
        "slug": "Insight about your data."
    }
];

export default function Index() {
    const [data, setData] = useState<ServiceModel>()
    const router = useRouter();
    const {key} = router.query;

    useEffect(() => {
        setData(services.filter(obj => obj.key === key)[0]);
    }, [])

    if (!data) {
        return <div>nothing</div>
    }

    return (
        <div className={''}>
            <div className="overflow-hidden bg-gray-50 dark:bg-slate-900 py-16 lg:py-24">
                <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                    <TopDots/>
                    <div className="relative">
                        <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
                            {data?.title ?? 'No Title'}
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500 dark:text-slate-300">
                            {data?.description}
                        </p>
                    </div>
                    {data?.sections.map((section, index) => {
                        return index % 2 === 1 ? <Right section={section}/> : <Left section={section}/>
                    })}
                </div>
            </div>
        </div>

    )
}

const Left = (props: {section: {
        description: string,
        img: string,
        keys: { title: string, description: string }[],
        title: string,
    }})=>{
    const {section} = props;
    return (<>
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 ">
            <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-slate-100">{section.title}</h3>
                <p className="mt-3 text-lg text-gray-500 dark:text-slate-300">
                    {section.description}
                </p>
                <dl className="mt-10 space-y-10">
                    {section.keys.map((item, index) => (
                        <div key={index} className="relative">
                            <dt>
                                <div
                                    className="absolute flex h-8 w-8 items-start justify-start rounded-xl text-blue-600 dark:text-yellow-500">
                                    <CheckCircleIcon className="h-8 w-8" aria-hidden="true"/>
                                </div>
                                <p className="ml-12 text-lg font-medium leading-6 text-gray-900 dark:text-slate-100">{item.title}</p>
                            </dt>
                            <dd className="mt-2 ml-12 text-base text-gray-500 dark:text-slate-300">{item.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                <Image
                    className="relative mx-auto"
                    width={490}
                    height={400}
                    src={section.img}
                    alt=""
                />
            </div>
        </div>
        <LeftDots/>
    </>)
}

const Right = (props: {section: {
        description: string,
        img: string,
        keys: { title: string, description: string }[],
        title: string,
    }}) => {
    const {section} = props;
    return (
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="lg:col-start-2">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-slate-100">{section.title}</h3>
                    <p className="mt-3 text-lg text-gray-500 dark:text-slate-300">
                        {section.description}
                    </p>
                    <dl className="mt-10 space-y-10">
                        {section.keys.map((item, index) => (
                            <div key={index} className="relative">
                                <dt>
                                    <div
                                        className="absolute flex h-8 w-8 items-start justify-start rounded-xl text-blue-600 dark:text-yellow-500">
                                        <CheckCircleIcon className="h-8 w-8" aria-hidden="true"/>
                                    </div>
                                    <p className="ml-12 text-lg font-medium leading-6 text-gray-900 dark:text-slate-100">{item.title}</p>
                                </dt>
                                <dd className="mt-2 ml-12 text-base text-gray-500 dark:text-slate-300">{item.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                    <RightDots/>
                    <Image
                        className="relative mx-auto"
                        width={490}
                        height={400}
                        src={section.img}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

const LeftDots = ()=>{
    return (
        <svg
            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-slate-800"
                          fill="currentColor"/>
                </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
        </svg>
    )
}

const RightDots = ()=>{
    return (
        <svg
            className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
            width={784}
            height={404}
            fill="none"
            viewBox="0 0 784 404"
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-slate-800"
                          fill="currentColor"/>
                </pattern>
            </defs>
            <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"/>
        </svg>
    )
}

const TopDots = ()=>{
    return (
        <svg
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true">
            <defs>
                <pattern
                    id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-slate-800"
                          fill="currentColor"/>
                </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"/>
        </svg>
    )
}
