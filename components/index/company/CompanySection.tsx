import {CompanyModel} from "../../models/company.model";
import {Tooltip} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import {Companies} from "../../../data/companies";

export default function CompanySection() {
    const companies: CompanyModel[] = Companies;

    return (
        <>
            <div className="bg-blue-600 dark:bg-yellow-500">
                <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white text-center dark:text-slate-900">
                        Some companies which profited from my work
                    </h2>
                    <div className="mt-8 flow-root lg:mt-10">
                        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-flow-col  lg:-ml-4 gap-12">
                            {companies.map((item, index) =>
                                <Tooltip key={index} title={item.name.toUpperCase()}>
                                    <Link href={item.url} target={'_blank'}
                                          className={'cursor-pointer flex items-center justify-center grayscale opacity-80 brightness-200 hover:scale-110 '}>
                                        <Image width={300} height={300} className="h-auto w-24 max-h-12 aspect-auto"
                                               src={item.logo} alt="Tuple"/>
                                    </Link>
                                </Tooltip>
                            )}
                        </div>
                    </div>
            </div>
        </div>
        </>

    )
}
