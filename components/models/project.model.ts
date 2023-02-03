export interface ProjectModel {
    id: string,
    title: string,
    description: string,
    slug: string,
    keys: { icon?: any, value: string, description: string }[],
    stats?: { key: string, value: string }[],
    client: string,
    previewLink?: string,
    img: string,
    createAt?: Date,
    updatedAt?: Date,
    order?: number,
    rollout: {
        seconds: number,
        nanoseconds: number
    },
}
