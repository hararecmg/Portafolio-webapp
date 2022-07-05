export type MainMenuTypes = ''|'perfil'|'favorites'|'search'|'ramdom';

export interface MainMenuState {
    mouse_over: MainMenuTypes;
    tooltip_text: string;
}