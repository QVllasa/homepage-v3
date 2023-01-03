import EducationAccordion from "../../components/accordion/EducationAccordion";

const education = [
    {
        id: 1,
        degree: 'M.Sc. in Economics Engineering',
        period: '2013-2028',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        institute: 'Karlsruhe Institute of Technology',
    },
    {
        id: 2,
        degree: 'B.Sc. in Economics',
        period: '2013-2028',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        institute: 'Karlsruhe Institute of Technology',
    },
]

export default function Education() {
    return (
        <div className="overflow-hidden bg-white">
            <div className="relative mx-auto py-24">
                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education.</h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Where I shifted my limits
                        </p>
                    </div>
                    <dl className="grid grid-cols-1 gap-4 lg:col-span-2 lg:mt-0">
                        {education.map((item) => (
                            <EducationAccordion key={item.id} item={item}/>
                        ))}
                    </dl>

                </div>

            </div>
        </div>
    )
}
