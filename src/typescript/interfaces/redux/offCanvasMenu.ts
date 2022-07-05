export type OffCanvasTypes = ''|'button'|'linkedin'|'github'|'academico'|'curriculum';

export interface OffCanvasMenuState extends MouseOverCanvas {
    open: boolean;
    loading?: boolean;
}

export interface MouseOverCanvas {
    tooltip_text?: string;
    mouse_over?: OffCanvasTypes;
}