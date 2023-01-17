export interface ExperienceModel {
    role: string,
    company: string,
    description: string,
    from: {seconds: number, nanoseconds: number},
    to: {seconds: number, nanoseconds: number},
}
