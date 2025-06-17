import EducationAccordion from "../../accordion/EducationAccordion";
import {Educations} from "../../../data/educations";
import {useTranslation} from 'next-i18next';

export default function Education() {
    const educations = Educations;
    const {t} = useTranslation('common');

    return (
        <div className="" id={'education'}>
            <div className="relative mx-auto py-24">
                <div
                    className="relative mx-auto max-w-md  px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold transition tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
                            {t('experience.education.title')}
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg transition text-gray-500 dark:text-slate-300">
                            {t('experience.education.subtitle')}
                        </p>
                    </div>
                    <dl className="mt-12 grid grid-cols-1 gap-4 lg:col-span-2 lg:mt-0">
                        {educations.map((item) => (
                            <EducationAccordion key={item.id} item={item}/>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
