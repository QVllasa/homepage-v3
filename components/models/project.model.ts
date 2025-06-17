export interface ProjectModel {
    id: string,
    title: string | {
        en: string,
        de: string
    },
    status: 'On Hold' | 'Canceled' | 'Completed' | 'In Progress',
    description: string | {
        en: string,
        de: string
    },
    shortDescription: string | {
        en: string,
        de: string
    },
    keys: {
        icon?: any,
        value: string | {
            en: string,
            de: string
        },
        description: string | {
            en: string,
            de: string
        }
    }[],
    stats?: {
        key: string | {
            en: string,
            de: string
        },
        value: string | {
            en: string,
            de: string
        }
    }[],
    client: string | {
        en: string,
        de: string
    },
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
