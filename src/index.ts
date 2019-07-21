import "./style.scss";

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

let Notifications: Array<INotifier> = [];

export default class Notifier {
  private message: string;

  private itemOptions: {
    type: string;
    delay: number;
    animationShowClass: string;
    animationHideClass: string;
  };

  private baseOptions: {
    theme: string;
    position: string;
  };

  private notices: Array<INotifier>;
  private list: HTMLElement;

  private static checkOptions(o: any, k: string) {
    if (typeof o !== "undefined") {
        return o.hasOwnProperty(k);
    } else {
        return false;
    }
  }

  constructor(options: INotifierBaseOptions) {
    this.baseOptions = {
      theme: Notifier.checkOptions(options, "theme") ? options.theme : "default",
      position: Notifier.checkOptions(options, "position") ? options.position : "top-right"
    };

    const container = document.createElement("div");
    container.classList.add("js-notifier");
    container.innerHTML = `
      <div
        id="js-notifier-list"
        class="notifier__list
        notifier__list--position-${this.baseOptions.position}
        notifier__list--theme-${this.baseOptions.theme}">
      </div>
    `;

    document.body.appendChild(container);

    this.list = document.getElementById("js-notifier-list");

    return this;
  }

  public post(message: string, options: INotifierItemOptions): number {
      this.notices = Notifications;
      this.message = message;

      this.itemOptions = {
        type: Notifier.checkOptions(options, "type") ? options.type : "default",
        delay: Notifier.checkOptions(options, "delay") ? options.delay : 3000,
        animationShowClass: Notifier.checkOptions(options, "animationShowClass")
        ? options.animationShowClass
        : "notifier__item--animation-show",
        animationHideClass: Notifier.checkOptions(options, "animationHideClass")
        ? options.animationHideClass
        : "notifier__item--animation-hide"
      };

      const itemID = this.notices.length;

      this.setAction("show", itemID);
      this.setAction("activate", itemID);
      this.setAction("hide", itemID);

      return itemID;
  }

  private setAction(action: string, itemID: number): Function {
      const commands: any = {
          activate: () => {
            this.activateClose(itemID);
          },
          show: () => {
            this.addNotification();
            this.renderNotification(itemID);
          },
          hide: () => {
            setTimeout(() => {
              this.removeNotification(itemID);
            }, this.itemOptions.delay);
          }
      };

      return commands[action]();
  }

  private addNotification(): number {
    return this.notices.push({message: this.message, options: this.itemOptions});
  }

  private removeNotification(itemID: number): void {
    if (typeof this.notices[itemID] !== "undefined") {
      const item = this.list.querySelector("div[data-notice-id='" + itemID + "']");

      if (typeof item !== "undefined") {
        item.classList.remove(this.itemOptions.animationShowClass);
        item.classList.add(this.itemOptions.animationHideClass);

        setTimeout(() => {
          item.parentNode.removeChild(item);
        }, 500);
      }

      delete this.notices[itemID];
    }
  }

  private renderNotification(itemID: number): Node {
    const item = document.createElement("div");

    item.classList.add("notifier__item", "notifier__item--type-" + this.itemOptions.type, this.itemOptions.animationShowClass);
    item.setAttribute("data-notice-id", itemID.toString());
    item.innerHTML = `<p class="notifier__text">${this.message}</p>`;

    return this.list.insertBefore(item, this.list.firstChild);
  }

  private activateClose(itemID: number): void {
    const item = this.list.querySelector("div[data-notice-id='" + itemID + "']");

    item.addEventListener("click", () => {
      return this.removeNotification(itemID);
    });
  }
}
