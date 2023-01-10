export interface ProjectModel {
    id: string,
    title: string,
    description:string,
    slug: string,
    keys: string[],
    client: string,
    previewLink: string,
    img: string,
    createAt: Date,
    updatedAt: Date,
}
