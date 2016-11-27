interface INotifierItemOptions {
    type?: string;
    delay?: number;
    animationShowClass?: string;
    animationHideClass?: string;
}
interface INotifierBaseOptions {
    theme?: string;
    position?: string;
}

declare class Notifier {
    message: string;
    INotifierItemOptions: {
        type?: string;
        delay?: number;
        animationShowClass?: string;
        animationHideClass?: string;
    };
    INotifierBaseOptions: {
        theme?: string;
        position?: string;
    };
    constructor(options: INotifierBaseOptions);
    post(message: string, options: INotifierItemOptions): number;
}