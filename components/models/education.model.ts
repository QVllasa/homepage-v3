export interface EducationModel {
    id: string,
    degree: string,
    from: string,
    to: string,
    name: string,
    description: {
        en: string,
        de: string
    } | string, // Unterstützung für Legacy-Daten
    order: number,
    url: string,
    icon?: any,
}
