export interface ServiceModel {

    order: number,
    img: string,
    slug: string | {
        en: string,
        de: string
    },
    title: string | {
        en: string,
        de: string
    },
    sections: {
        description: string | {
            en: string,
            de: string
        },
        img: string,
        keys: {
            title: string | {
                en: string,
                de: string
            },
            description: string | {
                en: string,
                de: string
            }
        }[],
        title: string | {
            en: string,
            de: string
        },
    }[],
    description: string | {
        en: string,
        de: string
    },
    pageTitle?: string | {
        en: string,
        de: string
    },
    key: string,

}
