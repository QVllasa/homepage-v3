export interface ExperienceModel {
    id: string,
    role: string,
    company: string,
    companyUrl: string,
    order: number,
    description: {
        en: string,
        de: string
    } | string, // Unterstützung für Legacy-Daten
    from: string,
    to: string,
    icon?: any,
}
