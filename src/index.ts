import './styles.scss';

interface INotifier {
    message: string,
    options: INotifierOptions
}

interface INotifierOptions {
    theme: string,
    delay: number,
    position: string,
    animationShowClass: string,
    animationHideClass: string
}

var Notifications: Array<INotifier> = [];

export default class Notifier {
    message: string;
    options: {
        theme: string,
        delay: number,
        position: string,
        animationShowClass: string,
        animationHideClass: string
    };

    private notices: Array<INotifier>;
    private currentNotificationID: number;
    private list: HTMLElement;

    constructor(message: string, options: INotifierOptions) {
        this.notices = Notifications;
        this.currentNotificationID = this.notices.length;

        this.message = message;

        const checkOptions = (o: string) => {
            if (typeof options != 'undefined') {
                return options.hasOwnProperty(o)
            } else {
                return false
            }
        };

        this.options = {
            theme: checkOptions('theme') ? options.theme : 'default',
            delay: checkOptions('delay') ? options.delay : 3000,
            position: checkOptions('position') ? options.position : 'top-right',
            animationShowClass: checkOptions('animationShowClass') ? options.animationShowClass : 'notifier__item--animation-show',
            animationHideClass: checkOptions('animationHideClass') ? options.animationHideClass : 'notifier__item--animation-hide'
        };

        this.setAction('show');
        this.setAction('activate');
        this.setAction('hide');
    }

    setAction(action: string): Function {
        const commands: any = {
            activate: () => {
                this.activateClose();
            },
            show: () => {
                this.addNotification();
                this.renderNotification();
            },
            hide: () => {
                setTimeout(() => {
                    this.removeNotification(this.currentNotificationID);
                }, this.options.delay);
            }
        };

        return commands[action]();
    }

    addNotification(): number {
        return this.notices.push({message: this.message, options: this.options});
    }

    removeNotification(i: number): void {
        if (typeof this.notices[i] != 'undefined') {
            const item = this.list.querySelector('div[data-notice-id="' + i + '"]');

            if (typeof item != 'undefined') {
                item.classList.remove(this.options.animationShowClass);
                item.classList.add(this.options.animationHideClass);

                setTimeout(() => {
                    item.parentNode.removeChild(item);
                }, 300);
            }

            delete this.notices[i];
        }
    }

    insertNotification(): Node {
        this.list = document.getElementById('js-notifier-list');

        const item = document.createElement('div');
        item.classList.add('notifier__item', 'notifier__item--theme-' + this.options.theme, this.options.animationShowClass);
        item.setAttribute('data-notice-id', (this.currentNotificationID).toString());
        item.innerHTML = `<p class="notifier__text">${this.message}</p>`;

        return this.list.insertBefore(item, this.list.firstChild);
    }

    renderNotification(): Node {
        if (document.getElementById('js-notifier') == undefined) {
            const container = document.createElement('div');
            container.id = 'js-notifier';
            container.innerHTML = '<div class="js-notifier"><div id="js-notifier-list" class="notifier__list"></div></div>';

            document.body.appendChild(container);
        }

        return this.insertNotification();
    }

    activateClose(): void {
        const item = this.list.querySelector('div[data-notice-id="' + (this.currentNotificationID) + '"]');

        item.addEventListener('click', () => {
            return this.removeNotification(this.currentNotificationID)
        });
    }
}

export function get(message: string, options: any): void {
    new Notifier(message, options)
}