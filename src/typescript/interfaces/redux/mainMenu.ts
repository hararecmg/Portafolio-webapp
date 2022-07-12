export type MainMenuTypes = ''|'perfil'|'favorites'|'search'|'ramdom';

export interface MainMenuState extends MainMenuOpen {
    mouse_over: MainMenuTypes;
    tooltip_text: string;
}

export interface MainMenuOpen {
    open?: boolean;
    loading?: boolean;
}