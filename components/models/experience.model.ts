export interface ExperienceModel {
    role: string,
    company: string,
    companyUrl: string,
    order: number,
    description: string,
    from: {seconds: number, nanoseconds: number},
    to: {seconds: number, nanoseconds: number},
}
