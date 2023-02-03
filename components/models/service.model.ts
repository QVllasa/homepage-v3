export interface ServiceModel {

    order: number,
    img: string,
    slug: string,
    title: string,
    sections: {
        description: string,
        img: string,
        keys: { title: string, description: string }[],
        title: string,
    }[],
    description: string,
    pageTitle?: string,
    key: string,

}
