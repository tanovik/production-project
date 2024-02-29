export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    SETTINGS = 'settings',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // must be the last one
    NOT_FOUND = 'not_found',
}

export const getRouteMain = (): string => '/'
export const getRouteAbout = (): string => '/about'
export const getRouteProfile = (id: string): string => `/profile/${id}`
export const getRouteArticles = (): string => '/articles'
export const getRouteSettings = (): string => '/settings'
export const getRouteArticleDetails = (id: string): string => `/articles/${id}`
export const getRouteArticleCreate = (): string => '/articles/new'
export const getRouteArticleEdit = (id: string): string =>
    `/articles/${id}/edit`
export const getRouteAdmin = (): string => '/admin'
export const getRouteForbidden = (): string => '/forbidden'


export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteArticles()]: AppRoutes.ARTICLES,
    [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
    [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
    [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};