import { acceptHMRUpdate,defineStore } from 'pinia';

export type AlertStyle = "success" | "info" | "warning" | "error" | "none";

export interface AlertOptions {
    html?: boolean;
    closable?: boolean;
    timeout?: number | false;
    style?: AlertStyle;
}

const defaultOptions : AlertOptions = {
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
        notify(message: string,style:AlertStyle, options?: AlertOptions) {
            const opts = { ...defaultOptions,style,...options };
            const id = this.state.items.length + 1;
            const alert: Alert = {
                id,
                message,
                ...opts,
            };
            this.state.items.push(alert);
            if (opts.timeout !== false) {
                setTimeout(() => {
                    this.remove(id);
                }, opts.timeout);
            }
        }
    },

});