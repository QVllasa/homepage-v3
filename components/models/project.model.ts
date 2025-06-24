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
    demoAvailable?: boolean,
    demoNote?: string | {
        en: string,
        de: string
    },
    img: string,
    createAt?: Date,
    updatedAt?: Date,
    order?: number,
    rollout: {
        seconds: number,
        nanoseconds: number
    },
    techStack?: {
        category: string | {
            en: string,
            de: string
        },
        technologies: string[]
    }[],
    skills?: {
        category: string | {
            en: string,
            de: string
        },
        items: string[]
    }[],
    challenges?: {
        title: string | {
            en: string,
            de: string
        },
        description: string | {
            en: string,
            de: string
        }
    }[],
    learnings?: {
        title: string | {
            en: string,
            de: string
        },
        description: string | {
            en: string,
            de: string
        }
    }[]
}
