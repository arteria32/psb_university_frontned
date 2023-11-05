export type NavigationTab = {
    id: number,
    url: string,
    name: string,
    img?: string
}
export const NAVIGATION_BAR_CONFIG: NavigationTab[] = [
    {
        id: 0,
        url: "/profile",
        name: "Профиль"
    }, {
        id: 1,
        url: "/applications",
        name: "Заявки на обучение"
    }]