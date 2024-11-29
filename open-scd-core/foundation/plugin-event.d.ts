import { targetLocales } from '../locales.js';
export declare type Plugin = {
    name: string;
    translations?: Record<typeof targetLocales[number], string>;
    src: string;
    icon: string;
    requireDoc?: boolean;
    active?: boolean;
};
export declare type ConfigurePluginDetail = {
    name: string;
    kind: 'menu' | 'editor';
    config: Plugin | null;
};
export declare type ConfigurePluginEvent = CustomEvent<ConfigurePluginDetail>;
/** The combination of name and kind uniquely identifies the plugin to be configured.
 * If config is null, the plugin is removed. Otherwise, the plugin is added or reconfigured. */
export declare function newConfigurePluginEvent(name: string, kind: 'menu' | 'editor', config: Plugin | null): ConfigurePluginEvent;
declare global {
    interface ElementEventMap {
        ['oscd-configure-plugin']: ConfigurePluginEvent;
    }
}
