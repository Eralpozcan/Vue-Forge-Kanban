import { acceptHMRUpdate, defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export type AlertStyle = "success" | "info" | "warning" | "error" | "none";

export interface AlertOptions {
  html?: boolean;
  closable?: boolean;
  timeout?: number | false;
  style?: AlertStyle;
}

const defaultOptions: Required<AlertOptions> = {
  closable: true,
  timeout: 5000,
  style: "info",
  html: false,
};

export interface Alert extends AlertOptions {
  id: string;
  message: string;
}

export const useAlerts = defineStore("alerts", {
  state: () => ({
    items: [] as Alert[],
  }),
  actions: {
    notify(message: string, style: AlertStyle, options?: AlertOptions) {
      const opts = { ...defaultOptions, style, ...options };
      const id = uuid();
      const alert: Alert = {
        id,
        message,
        ...opts,
      };
      this.items.push(alert);
      if (opts.timeout !== false) {
        setTimeout(() => {
          this.remove(id);
        }, opts.timeout);
      }
    },
    success(message: string, options?: AlertOptions) {
      this.notify(message, "success", options);
    },

    error(message: string, options?: AlertOptions) {
      this.notify(message, "error", options);
    },

    warning(message: string, options?: AlertOptions) {
      this.notify(message, "warning", options);
    },

    info(message: string, options?: AlertOptions) {
      this.notify(message, "info", options);
    },

    remove(id: string) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlerts, import.meta.hot));
}
