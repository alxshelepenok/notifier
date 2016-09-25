import './style.scss';
export interface INotifier {
    message: string;
    options: INotifierItemOptions;
}
export interface INotifierItemOptions {
    type: string;
    delay: number;
    animationShowClass: string;
    animationHideClass: string;
}
export interface INotifierBaseOptions {
    theme: string;
    position: string;
}
export default class Notifier {
    message: string;
    itemOptions: {
        type: string;
        delay: number;
        animationShowClass: string;
        animationHideClass: string;
    };
    baseOptions: {
        theme: string;
        position: string;
    };
    private static checkOptions(o, k);
    private notices;
    private list;
    constructor(options: INotifierBaseOptions);
    post(message: string, options: INotifierItemOptions): number;
    setAction(action: string, itemID: number): Function;
    addNotification(): number;
    removeNotification(itemID: number): void;
    renderNotification(itemID: number): Node;
    activateClose(itemID: number): void;
}