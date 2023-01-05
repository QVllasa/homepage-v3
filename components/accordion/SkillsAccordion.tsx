export default function SkillsAccordion(data: {item: {id: number, name: string, description: string, icon: any}}) {
    return (
        <div>
            <dt>
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <data.item.icon className="h-8 w-8" aria-hidden="true"/>
                </div>
                <p className="mt-6 text-lg font-semibold leading-8 text-gray-900">{data.item.name}</p>
            </dt>
            <dd className="mt-2 text-base text-gray-600">{data.item.description}</dd>
        </div>
    )
}
