import { CLICK_BUTTON, DROP_APPLE, RESET_APP } from './constants.js';

export const dropApple = (apples) => {
    return { type: DROP_APPLE, payload: apples } 
}
export const hanleClickButton = (buttonStatus) => {
    return { type: CLICK_BUTTON, payload: buttonStatus } 
}
export const resetApp = () => {
    return { type: RESET_APP } 
}