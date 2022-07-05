import { useAppSelector } from '../../hooks';


export const Tooltip = () => {

    const { 
        mouse_over: mouse_menu, 
        tooltip_text: text_menu, 
    } = useAppSelector(state => state.mainMenu);

    const { 
        mouse_over: mouse_canvas, 
        tooltip_text: text_canvas,
        open 
    } = useAppSelector(state => state.offCanvas);

    return (
        <div className={
                open
                    ? mouse_canvas
                        ? `off-canvas__tooltip--${mouse_canvas}`
                        : 'off-canvas__tooltip'
                    : mouse_menu
                        ? `main-menu__tooltip--${mouse_menu}`
                        : 'main-menu__tooltip'
            }
        >
            {
                <p>
                    { `${text_menu}${text_canvas}` }
                </p>
            }
        </div>
    )
}