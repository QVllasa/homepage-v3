export interface SkillModel {
    id: string,
    name: string,
    description: {
        en: string,
        de: string
    } | string, // Unterstützung für Legacy-Daten
    icon?: any,
    order: number
}
